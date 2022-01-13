package de.telran.businesstracker.service;

import de.telran.businesstracker.model.Project;
import de.telran.businesstracker.model.User;
import de.telran.businesstracker.repositories.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.argThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProjectServiceTest {

    @Mock
    ProjectRepository projectRepository;

    @Mock
    UserRepository userRepository;
    @Mock
    MemberRepository memberRepository;
    @Mock
    RoadmapRepository roadmapRepository;
    @Mock
    MilestoneRepository milestoneRepository;

    @InjectMocks
    ProjectService projectService;

    private User user;

    @BeforeEach
    public void beforeEachTest() {
        user = User.builder().id(1L).build();
    }

    @Test
    public void testAdd_success() {
        User user2 = User.builder().id(2L).build();
        User user3 = User.builder().id(3L).build();

        when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));
        when(userRepository.findById(user2.getId())).thenReturn(Optional.of(user2));
        when(userRepository.findById(user3.getId())).thenReturn(Optional.of(user3));

        Project project = Project.builder()
                .id(1L)
                .name("new project")
                .user(user)
                .build();

        projectService.add(project.getName(), List.of(user2.getId(), user3.getId()));

        verify(userRepository, times(1)).findById(1L);
        verify(userRepository, times(1)).findById(2L);
        verify(userRepository, times(1)).findById(3L);

        verify(memberRepository, times(1)).saveAll(anyList());
        verify(roadmapRepository, times(1)).save(argThat(argument -> argument.getName().equals("Roadmap")));
        verify(milestoneRepository, times(1)).saveAll(anyList());

        verify(projectRepository, times(1))
                .save(argThat(savedProject -> savedProject.getName().equals(project.getName()) &&
                        savedProject.getUser().getId().equals(user.getId()))
                );
    }

    @Test
    public void testAdd_userDoesNotExist_EntityNotFoundException() {
        Project project = Project.builder()
                .id(1L)
                .name("new project")
                .user(user)
                .build();

        Exception exception = assertThrows(EntityNotFoundException.class, () ->
                projectService.add(project.getName(), List.of(1L, 2L)));

        verify(userRepository, times(1)).findById(any());
        assertEquals("Error! This user doesn't exist in our DB", exception.getMessage());
    }

    @Test
    public void projectEdit_projectExist_fieldsChanged() {

        Project project = Project.builder()
                .id(1L)
                .name("new project")
                .user(user)
                .build();

        String newName = "Small project";

        when(projectRepository.findById(project.getId())).thenReturn(Optional.of(project));

        projectService.edit(project.getId(), newName);

        verify(projectRepository, times(1))
                .save(argThat(savedProject -> savedProject.getName().equals(newName) &&
                        savedProject.getUser().getId() == 1)
                );
    }

    @Test
    void getAll_twoObjects() {

        Project project1 = Project.builder()
                .id(1L)
                .name("new project")
                .user(user)
                .build();

        Project project2 = Project.builder()
                .id(1L)
                .name("Small project")
                .user(user)
                .build();

        List<Project> projects = new ArrayList<>();

        projects.add(project1);
        projects.add(project2);

        when(projectRepository.findAll()).thenReturn(projects);

        assertEquals(project1.getName(), projectService.getAll().get(0).getName());
        assertEquals(project1.getUser(), projectService.getAll().get(0).getUser());

        assertEquals(project2.getName(), projectService.getAll().get(1).getName());
        assertEquals(project2.getUser(), projectService.getAll().get(1).getUser());
    }

    @Test
    void testGetById_objectExist() {
        Project project = Project.builder()
                .id(1L)
                .name("Small project")
                .user(user)
                .build();

        when(projectRepository.findById(project.getId())).thenReturn(Optional.of(project));
        Project expectedProject = projectService.getById(project.getId());

        assertEquals(expectedProject.getName(), project.getName());
        assertEquals(expectedProject.getUser(), project.getUser());

        verify(projectRepository, times(1)).findById(argThat(
                id -> id.equals(project.getId())));
    }

    @Test
    void testGetById_objectNotExist() {
        Project project = Project.builder()
                .id(1L)
                .name("Small project")
                .user(user)
                .build();

        Exception exception = assertThrows(EntityNotFoundException.class,
                () -> projectService.getById(project.getId() + 1));

        verify(projectRepository, times(1)).findById(any());
        assertEquals("Error! This project doesn't exist in our DB", exception.getMessage());

    }

    @Test
    void removeById_oneObjectDeleted() {
        Project project = Project.builder()
                .id(1L)
                .name("Small project")
                .user(user)
                .build();

        when(projectRepository.findById(1L)).thenReturn(Optional.of(project));
        projectService.removeById(project.getId());

        verify(projectRepository, times(1)).findById(1L);
        verify(projectRepository, times(1)).delete(project);
    }
}

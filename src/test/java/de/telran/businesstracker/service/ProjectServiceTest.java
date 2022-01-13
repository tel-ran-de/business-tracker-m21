package de.telran.businesstracker.service;

import de.telran.businesstracker.model.Project;
import de.telran.businesstracker.model.User;
import de.telran.businesstracker.repositories.ProjectRepository;
import de.telran.businesstracker.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
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

    @InjectMocks
    ProjectService projectService;

    private User user;

    @BeforeEach
    public void beforeEachTest() {
        user = User.builder().id(1L).build();
    }

    @Test
    public void testAdd_success() {

        when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));

        Project project = Project.builder()
                .id(1L)
                .name("new project")
                .user(user)
                .build();

        projectService.add(project.getName(), project.getUser().getId());

        verify(projectRepository, times(1)).save(any());
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
                projectService.add(project.getName(), project.getUser().getId() + 2));

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

    @Captor
    ArgumentCaptor<Project> taskArgumentCaptor;

    @Test
    void removeById_oneObjectDeleted() {
        Project project = Project.builder()
                .id(1L)
                .name("Small project")
                .user(user)
                .build();

        when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));

        projectService.add(project.getName(), project.getUser().getId());
        projectService.removeById(project.getId());

        List<Project> capturedProjects = taskArgumentCaptor.getAllValues();
        verify(projectRepository, times(1)).deleteById(project.getId());
        assertEquals(0, capturedProjects.size());
    }
}

package de.telran.businesstracker.service;

import de.telran.businesstracker.model.*;
import de.telran.businesstracker.repositories.*;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectService {

    static final String PROJECT_DOES_NOT_EXIST = "Error! This project doesn't exist in our DB";
    static final String USER_DOES_NOT_EXIST = "Error! This user doesn't exist in our DB";

    final ProjectRepository projectRepository;
    final UserRepository userRepository;
    final MemberRepository memberRepository;
    final RoadmapRepository roadmapRepository;
    final MilestoneRepository milestoneRepository;

    public ProjectService(ProjectRepository projectRepository, UserRepository userRepository, MemberRepository memberRepository, RoadmapRepository roadmapRepository, MilestoneRepository milestoneRepository) {
        this.projectRepository = projectRepository;
        this.userRepository = userRepository;
        this.memberRepository = memberRepository;
        this.roadmapRepository = roadmapRepository;
        this.milestoneRepository = milestoneRepository;
    }

    public Project add(String name, List<Long> userIds) {

        User user = userRepository.findById(1L).orElseThrow(() -> new EntityNotFoundException(USER_DOES_NOT_EXIST));
        Project project = projectRepository.save(new Project(name, user));

        List<Member> memberList = new ArrayList<>();
        memberList.add(new Member(project, user));

        if (userIds != null)
            for (Long userId : userIds) {
                if (userId > 0)
                    memberList.add(
                            new Member(project, userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException(USER_DOES_NOT_EXIST)))
                    );
            }

        memberRepository.saveAll(memberList);

        Roadmap roadmap = roadmapRepository.save(new Roadmap("Roadmap", LocalDate.now(), project));
        List<Milestone> milestones = List.of(
                new Milestone("Research", roadmap, new ArrayList<>()),
                new Milestone("Prototyping", roadmap, new ArrayList<>()),
                new Milestone("Market-fit", roadmap, new ArrayList<>())
        );
        milestoneRepository.saveAll(milestones);
        return project;
    }

    public void edit(Long id, String name) {
        Project project = getById(id);
        project.setName(name);
        projectRepository.save(project);
    }

    public List<Project> getAll() {
        return new ArrayList<>(projectRepository.findAll());
    }

    public Project getById(Long id) {
        return projectRepository.findById(id).orElseThrow(() -> new EntityNotFoundException(PROJECT_DOES_NOT_EXIST));
    }

    public void removeById(Long id) {
        Project project = getById(id);
        projectRepository.delete(project);
    }
}




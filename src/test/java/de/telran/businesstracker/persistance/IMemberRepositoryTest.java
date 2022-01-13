package de.telran.businesstracker.persistance;

import de.telran.businesstracker.model.Member;
import de.telran.businesstracker.model.Project;
import de.telran.businesstracker.model.Roadmap;
import de.telran.businesstracker.model.User;
import de.telran.businesstracker.repositories.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
public class IMemberRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private MemberRepository memberRepository;

    @Test
    public void testFindByProject_oneProject_fourRecordsFound() {
        User user = new User();
        Project project = Project
                .builder()
                .user(user)
                .name("Some project name")
                .build();

        Roadmap roadmap = Roadmap.
                builder()
                .project(project)
                .name("RM_01")
                .startDate(LocalDate.now())
                .build();

        entityManager.persist(user);
        entityManager.persist(project);
        entityManager.persist(roadmap);

        List<Member> members = Arrays.asList(
                Member.builder()
                        .project(project)
                        .user(user)
                        .build(),
                Member.builder()
                        .project(project)
                        .user(user)
                        .build(),
                Member.builder()
                        .project(project)
                        .user(user)
                        .build(),
                Member.builder()
                        .project(project)
                        .user(user)
                        .build()
        );

        members.forEach(member -> entityManager.persist(member));

        entityManager.flush();
        entityManager.clear();

        List<Member> foundMembers = memberRepository.findAllByProject(project);
        assertEquals(4, foundMembers.size());

        assertEquals(members.get(0).getUser().getName(), foundMembers.get(0).getUser().getName());
        assertEquals(members.get(1).getUser().getName(), foundMembers.get(1).getUser().getName());
        assertEquals(members.get(2).getUser().getName(), foundMembers.get(2).getUser().getName());
        assertEquals(members.get(3).getUser().getName(), foundMembers.get(3).getUser().getName());
    }

    @Test
    public void testFindByProjectAndActive_twoProject_twoRecordsFound() {
        User user = new User();
        Project project = Project
                .builder()
                .user(user)
                .name("Some project name")
                .build();

        User user2 = new User();
        Project project2 = Project
                .builder()
                .user(user)
                .name("Some project name 2")
                .build();

        entityManager.persist(user);
        entityManager.persist(user2);

        entityManager.persist(project);
        entityManager.persist(project2);

        List<Member> members = Arrays.asList(
                Member.builder()
                        .project(project)
                        .user(user2)
                        .build(),
                Member.builder()
                        .project(project)
                        .user(user)
                        .build(),
                Member.builder()
                        .project(project2)
                        .user(user)
                        .build(),
                Member.builder()
                        .project(project2)
                        .user(user2)
                        .build()
        );

        members.forEach(member -> entityManager.persist(member));

        entityManager.flush();
        entityManager.clear();

        List<Member> foundMembers = memberRepository.findAllByProject(project);
        assertEquals(2, foundMembers.size());

        assertEquals(members.get(0).getUser().getName(), foundMembers.get(0).getUser().getName());
        assertEquals(members.get(1).getUser().getName(), foundMembers.get(1).getUser().getName());
    }

    @Test
    public void testFindByProjectAndActive_twoProject_noRecordsFound() {
        User user = new User();
        Project project = Project
                .builder()
                .user(user)
                .name("Some project name")
                .build();

        User user2 = new User();
        Project project2 = Project
                .builder()
                .user(user)
                .name("Some project name 2")
                .build();

        entityManager.persist(user);
        entityManager.persist(project);
        entityManager.persist(user2);
        entityManager.persist(project2);

        Member member = Member.builder()
                .project(project2)
                .user(user2)
                .build();

        entityManager.persist(member);

        entityManager.flush();
        entityManager.clear();

        List<Member> foundMembers = memberRepository.findAllByProject(project);
        assertEquals(0, foundMembers.size());
    }
}

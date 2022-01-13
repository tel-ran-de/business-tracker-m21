package de.telran.businesstracker.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @Setter
    private Project project;

    @ManyToOne
    @Setter
    private User user;

    public Member(Project project, User user) {
        this.project = project;
        this.user = user;
    }
}

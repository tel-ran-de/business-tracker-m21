package de.telran.businesstracker.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String name;
    @Setter
    @ManyToOne
    private User user;

    public Project(String name, User user) {
        this.name = name;
        this.user = user;
    }
}

package de.telran.businesstracker.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;


@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Roadmap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String name;
    @Setter
    private LocalDate startDate;

    @ManyToOne
    private Project project;

    public Roadmap(String name, LocalDate startDate, Project project) {
        this.name = name;
        this.startDate = startDate;
        this.project = project;
    }

    public Roadmap(String name, Project project) {
        this.name = name;
        this.project = project;
    }
}

package de.telran.businesstracker.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String name;
    @Setter
    private Integer hours;
    @Setter
    private Double cost;

    @ManyToOne
    private Task task;

    public Resource(String name, Integer hours, Double cost, Task task) {
        this.name = name;
        this.hours = hours;
        this.cost = cost;
        this.task = task;
    }
}

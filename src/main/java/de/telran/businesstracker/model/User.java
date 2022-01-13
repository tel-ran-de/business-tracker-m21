package de.telran.businesstracker.model;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;


@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    private String name;
    @Setter
    private String lastName;
    @Setter
    private String position;
    @Setter
    private String img;

    public User(String name, String lastName, String position, String img) {
        this.name = name;
        this.lastName = lastName;
        this.position = position;
        this.img = img;
    }

    public User(String name, String lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id.equals(user.id) && Objects.equals(name, user.name) && Objects.equals(lastName, user.lastName) && Objects.equals(position, user.position) && Objects.equals(img, user.img);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, lastName, position, img);
    }
}

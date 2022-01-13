package de.telran.businesstracker.service;

import de.telran.businesstracker.model.User;
import de.telran.businesstracker.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User add(String name, String lastName, String position, String img) {
        User user = new User(name, lastName, position, img);
        return userRepository.save(user);
    }

    public List<User> getAll() {
        return new ArrayList<>(userRepository.findAll());
    }
}

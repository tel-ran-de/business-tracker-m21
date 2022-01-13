package de.telran.businesstracker.config;

import de.telran.businesstracker.model.User;
import de.telran.businesstracker.repositories.UserRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.List;


/*
adds user list to db on programm start
 */
@Component
public class UsersDBUpdater implements ApplicationRunner {

    private final UserRepository userRepository;

    public UsersDBUpdater(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public void run(ApplicationArguments args) {
        String imgUrl = "https://i.pravatar.cc/150?img=";

        List<User> users = List.of(
                new User("Vasja", "Petrov", "CIO", imgUrl + 69),
                new User("Mark", "Fletcher", "CTO", imgUrl + 12),
                new User("Oliver", "Moody", "Developer", imgUrl + 67),
                new User("Bryan", "Terry", "PM", imgUrl + 64),
                new User("Nicholas", "Bruce", "Developer", imgUrl + 59),
                new User("William", "Woods", "System(s) Engineer", imgUrl + 60),
                new User("John", "Malone", "QA", imgUrl + 57),
                new User("Donald", "Maxwell", "Developer", imgUrl + 18),
                new User("Paul", "Armstrong", "CIO", imgUrl + 13),
                new User("Peter", "Allison", "QA", imgUrl + 11),
                new User("Simon", "Petrov", "Architect", imgUrl + 8),
                new User("Christopher", "Lamb", "CTO", imgUrl + 7),
                new User("Augusta", "Pitts", "Architect ", imgUrl + 9),
                new User("Caroline", "Perkins", "CTO", imgUrl + 25),
                new User("Justina ", "West", "Developer", imgUrl + 21),
                new User("Madlyn", "Griffin", "QA", imgUrl + 26),
                new User("Mary", "Lynch", "Network Administrator", imgUrl + 27),
                new User("Maia", "Schulz", "Developer", imgUrl + 1)
        );

        users.stream()
                .filter(user -> !userRepository.existsByNameIgnoreCaseAndLastNameIgnoreCaseAndPositionIgnoreCase(user.getName(), user.getLastName(), user.getPosition()))
                .forEach(userRepository::save);
    }
}

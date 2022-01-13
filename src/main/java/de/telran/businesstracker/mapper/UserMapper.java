package de.telran.businesstracker.mapper;

import de.telran.businesstracker.controller.dto.UserDto;
import de.telran.businesstracker.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserDto toDto(User user) {
        return new UserDto(user.getId(), user.getName(), user.getLastName(), user.getPosition(), user.getImg());
    }
}

package de.telran.businesstracker.controller;

import de.telran.businesstracker.controller.dto.UserDto;
import de.telran.businesstracker.mapper.UserMapper;
import de.telran.businesstracker.model.User;
import de.telran.businesstracker.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @PostMapping("")
    public UserDto createUser(@RequestBody @Valid UserDto userDto) {
        User user = userService.add(userDto.name, userDto.lastName, userDto.position, userDto.img);
        return userMapper.toDto(user);
    }

    @GetMapping("")
    public List<UserDto> getAllUsers() {
        return userService.getAll()
                .stream()
                .map(userMapper::toDto)
                .collect(Collectors.toList());
    }
}

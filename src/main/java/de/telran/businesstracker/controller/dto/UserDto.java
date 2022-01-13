package de.telran.businesstracker.controller.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    public long id;
    public String name;
    public String lastName;
    public String position;
    public String img;
}

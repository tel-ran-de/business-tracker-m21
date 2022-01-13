package de.telran.businesstracker.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectToDisplayDto {
    public Long id;
    public String name;
}

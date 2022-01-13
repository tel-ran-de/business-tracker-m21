package de.telran.businesstracker.mapper;

import de.telran.businesstracker.controller.dto.ProjectToDisplayDto;
import de.telran.businesstracker.model.Project;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {

    public ProjectToDisplayDto toDto(Project project) {
        return new ProjectToDisplayDto(
                project.getId(),
                project.getName()
        );
    }
}

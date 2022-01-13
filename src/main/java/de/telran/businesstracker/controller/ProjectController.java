package de.telran.businesstracker.controller;

import de.telran.businesstracker.controller.dto.ProjectToADdDto;
import de.telran.businesstracker.controller.dto.ProjectToDisplayDto;
import de.telran.businesstracker.mapper.ProjectMapper;
import de.telran.businesstracker.model.Project;
import de.telran.businesstracker.service.ProjectService;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService projectService;
    private final ProjectMapper projectMapper;

    public ProjectController(ProjectService projectService, ProjectMapper projectMapper) {
        this.projectService = projectService;
        this.projectMapper = projectMapper;
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectToDisplayDto createProject(@RequestBody @Valid ProjectToADdDto projectDto) {
        Project project = projectService.add(projectDto.name, projectDto.userIds);
        return projectMapper.toDto(project);
    }

    @Hidden
    @PutMapping("")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateProject(@RequestBody @Valid ProjectToDisplayDto projectToDisplayDto) {
        projectService.edit(projectToDisplayDto.id, projectToDisplayDto.name);
    }

    @Operation(summary = "get list of all projects")
    @GetMapping("")
    public List<ProjectToDisplayDto> getAllProjects() {
        return projectService.getAll()
                .stream()
                .map(projectMapper::toDto)
                .collect(Collectors.toList());
    }

    @Operation(summary = "get project by id")
    @GetMapping("/{id}")
    public ProjectToDisplayDto getProjectById(@PathVariable Long id) {
        Project project = projectService.getById(id);
        return projectMapper.toDto(project);
    }

    @Operation(summary = "delete project by id")
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProjectById(@PathVariable Long id) {
        projectService.removeById(id);
    }
}

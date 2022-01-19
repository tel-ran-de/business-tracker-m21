package de.telran.businesstracker.controller;

import de.telran.businesstracker.controller.dto.ResourceDto;
import de.telran.businesstracker.mapper.ResourceMapper;
import de.telran.businesstracker.model.Resource;
import de.telran.businesstracker.service.ResourceService;
import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/resources")
@CrossOrigin(origins = {"http://localhost:3000"})
public class ResourceController {

    private final ResourceService resourceService;
    private final ResourceMapper resourceMapper;

    public ResourceController(ResourceService resourceService, ResourceMapper resourceMapper) {
        this.resourceService = resourceService;
        this.resourceMapper = resourceMapper;
    }

    @Operation(summary = "add new resource")
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public ResourceDto createResource(@RequestBody @Valid ResourceDto resourceDto) {
        Resource resource = resourceService.add(resourceDto.name, resourceDto.hours, resourceDto.cost, resourceDto.taskId);
        return resourceMapper.toDto(resource);
    }

    @Hidden
    @PutMapping("")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateResource(@RequestBody @Valid ResourceDto resourceDto) throws HttpClientErrorException.BadRequest {
        resourceService.edit(resourceDto.id, resourceDto.name, resourceDto.hours, resourceDto.cost);
    }

    @Operation(summary = "get list of resources by roadmap id")
    @GetMapping("roadmap/{id}")
    public List<ResourceDto> getAllResourcesByRoadMap(@PathVariable long id) {
        return resourceService.getAllByRoadMapId(id)
                .stream()
                .map(resourceMapper::toDto)
                .collect(Collectors.toList());
    }

    @Operation(summary = "get list of resources by task id")
    @GetMapping("task/{id}")
    public List<ResourceDto> getAllResourcesByTask(@PathVariable long id) {
        return resourceService.getAllByTaskId(id)
                .stream()
                .map(resourceMapper::toDto)
                .collect(Collectors.toList());
    }

    @Hidden
    @Operation(summary = "get list of resources by id")
    @GetMapping("/{id}")
    public ResourceDto getResourceById(@PathVariable Long id) {
        Resource resource = resourceService.getById(id);
        return resourceMapper.toDto(resource);
    }

    @Operation(summary = "delete resource by id")
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteResourceById(@PathVariable Long id) {
        resourceService.removeById(id);
    }
}

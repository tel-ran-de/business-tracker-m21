package de.telran.businesstracker.controller;

import de.telran.businesstracker.controller.dto.KpiDto;
import de.telran.businesstracker.service.KpiService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class KpiController {

    private final KpiService kpiService;

    public KpiController(KpiService kpiService) {
        this.kpiService = kpiService;
    }

    @Operation(summary = "add new kpi")
    @PostMapping("/kpis/{id}")
    public void addKpi(@RequestBody KpiDto kpi, @PathVariable long id) {
        kpiService.add(id, kpi.kpi);
    }

    @Operation(summary = "get list of kpis by milestone id")
    @GetMapping("/milestone/{id}/kpis")
    public List<KpiDto> getAllKpiByMileStone(@PathVariable long id) {
        return kpiService.getAllKpiByMileStone(id)
                .stream()
                .map(KpiDto::new)
                .collect(Collectors.toList());
    }

    @Operation(summary = "get list of kpis by project id")
    @GetMapping("/project/{id}/kpis")
    public List<KpiDto> getAllKpiByProject(@PathVariable long id) {
        return kpiService.getAllKpiByProject(id)
                .stream()
                .map(KpiDto::new)
                .collect(Collectors.toList());
    }

    @Operation(summary = "get list of kpis by roadmap id")
    @GetMapping("/roadmap/{id}/kpis")
    public List<KpiDto> getAllKpiByRoadMap(@PathVariable long id) {
        return kpiService.getAllKpiByRoadMap(id)
                .stream()
                .map(KpiDto::new)
                .collect(Collectors.toList());
    }

    @Operation(summary = "delete kpi by id")
    @DeleteMapping("/milestone/{id}/kpi/{kpiId}")
    public void deleteKpiByMilestone(@PathVariable long id, @PathVariable int kpiId) {
        kpiService.removeKpi(id, kpiId);
    }
}

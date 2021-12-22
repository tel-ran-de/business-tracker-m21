package de.telran.businesstracker.controller;

import io.swagger.v3.oas.annotations.Hidden;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Hidden
@Controller
public class RedirectUiController {

    @RequestMapping(value = {
            "/products/**"})
    public String toRedirect() {
        return "forward:/";
    }
}

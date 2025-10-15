package com.project.symptom.Controller;

import com.project.symptom.Entity.Symptom;
import com.project.symptom.Entity.SymptomRequest;
import com.project.symptom.SymptomService.SymptomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class SymptomController {

    @Autowired
    private SymptomService symptomService;

    @PostMapping("/check-symptom")
    public Symptom checkSymptom(@RequestBody SymptomRequest request) {
        return symptomService.analyzeSymptoms(request.getSymptoms());
    }

    @GetMapping("/history")
    public List<Symptom> getHistory() {
        return symptomService.getAllHistory();
    }
}

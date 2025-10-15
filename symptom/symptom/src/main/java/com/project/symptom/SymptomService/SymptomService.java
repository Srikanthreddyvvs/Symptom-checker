package com.project.symptom.SymptomService;

import com.google.genai.Client;
import com.google.genai.types.GenerateContentResponse;
import com.project.symptom.Entity.Symptom;
import com.project.symptom.SymptomRepository.SymptomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class SymptomService {

    @Autowired
    private SymptomRepository repository;

    public Symptom analyzeSymptoms(String symptoms) {
        String result;
        try {
            Client client = new Client();
            String prompt = "You are a helpful medical assistant for educational purposes only.\n"
                    + "Given the following symptoms: " + symptoms + ", "
                    + "suggest 2-3 possible conditions and 2-3 general next steps.\n"
                    + "Always include this disclaimer: 'This information is for educational purposes only and not a medical diagnosis.'\n"
                    + "Return the answer in clear bullet points.";

            GenerateContentResponse response =
                    client.models.generateContent(
                            "gemini-2.5-flash",
                            prompt,
                            null);

            result = response.text();

        } catch (Exception e) {
            result = "Error while analyzing symptoms: " + e.getMessage();
        }

        Symptom history = new Symptom(symptoms, result, LocalDateTime.now());
        repository.save(history);
        return history;
    }

    public java.util.List<Symptom> getAllHistory() {
        return repository.findAll();
    }
}

package com.example.DriveX.controller;

import com.example.DriveX.model.Signup;
import com.example.DriveX.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5174") // Adjust if needed
public class LoginController {

    @Autowired
    private SignUpRepository signupRepository; // Ensure this is an instance variable

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        // Find user by email
        Optional<Signup> user = signupRepository.findByEmail(email); // Corrected

        Map<String, Object> response = new HashMap<>();
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            response.put("success", true);
            response.put("message", "Login Successful");
            return ResponseEntity.ok(response);
        }

        response.put("success", false);
        response.put("message", "Invalid email or password");
        return ResponseEntity.status(401).body(response);
    }
}
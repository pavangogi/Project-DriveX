package com.example.DriveX.controller;

import com.example.DriveX.model.Signup;
import com.example.DriveX.service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5174") // Adjust if needed
public class SignupController {

    @Autowired
    private SignupService signupService;
    

    @PostMapping("/signup")
public ResponseEntity<?> registerUser(@RequestBody Signup signup) {
    try {
        System.out.println("Received signup request: " + signup); // Debug log
        Signup savedUser = signupService.registerUser(signup);
        System.out.println("Saved user: " + savedUser); // Debug log
        return ResponseEntity.ok(savedUser);
    } catch (Exception e) {
        e.printStackTrace(); // Print the full stack trace
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}

}

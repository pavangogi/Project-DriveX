package com.example.DriveX.service;

import com.example.DriveX.model.Signup;
import com.example.DriveX.repository.SignUpRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class SignupService {

    @Autowired
    private SignUpRepository signupRepository;

    public Signup registerUser(Signup signup) {
        System.out.println("Saving user to database: " + signup); // Debug log
        return signupRepository.save(signup); // Save user
    }
}

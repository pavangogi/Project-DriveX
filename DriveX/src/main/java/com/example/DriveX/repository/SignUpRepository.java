package com.example.DriveX.repository;

import com.example.DriveX.model.Signup;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface SignUpRepository extends MongoRepository<Signup, String> {
    Optional<Signup> findByEmail(String email); // Find user by email
}

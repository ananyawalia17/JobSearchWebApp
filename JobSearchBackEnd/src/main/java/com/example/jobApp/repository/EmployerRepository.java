package com.example.jobApp.repository;

import com.example.jobApp.entity.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployerRepository extends JpaRepository<Employer, Integer> {

    Employer findByContactNumber(String contactNo);

}

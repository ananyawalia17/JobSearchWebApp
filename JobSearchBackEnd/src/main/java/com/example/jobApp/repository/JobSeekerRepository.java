package com.example.jobApp.repository;

import com.example.jobApp.entity.JobSeeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobSeekerRepository extends JpaRepository<JobSeeker, Integer> {

    JobSeeker findByContactNumber(String contactNo);

}

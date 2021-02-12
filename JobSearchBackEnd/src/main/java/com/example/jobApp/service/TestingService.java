package com.example.jobApp.service;

import com.example.jobApp.entity.Employer;
import com.example.jobApp.entity.Job;
import com.example.jobApp.entity.JobSeeker;
import com.example.jobApp.repository.EmployerRepository;
import com.example.jobApp.repository.JobRepository;
import com.example.jobApp.repository.JobSeekerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class TestingService {

    private static final Logger log = LoggerFactory.getLogger(TestingService.class);

    @Autowired
    private JobSeekerRepository jobSeekerRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private EmployerRepository employerRepository;

    public Job fetchJob(Integer jobId) {
        Job job = jobRepository.findById(jobId).get();
        log.info("EMPLOYER:{}",job.getId());
        return job;
    }

    public JobSeeker fetchJobSeeker(String contactNo) {
        return jobSeekerRepository.findByContactNumber(contactNo);
    }

    public void saveJobSeeker() {
        JobSeeker jobSeeker = JobSeeker.builder()
                .firstName("Venky")
                .middleName("VJ")
                .lastName("Jain")
                .contactNumber("9478602682")
                .gender("Male")
                .jobTitle("SDE")
                .yearsOfExperience(5.5)
                .education("Senior Secondary")
                .location("Sangrur")
                .dateOfBirth(LocalDate.of(1999,10,1))
                .language("Punjabi")
                .description("Jobbbbbb")
                .build();
        jobSeekerRepository.save(jobSeeker);
    }

    public void saveJob() {
        Job job = Job.builder()
                .jobTitle("SDE")
                .company("vvvvv")
                .jobCategory("Plumber")
                .jobType("FTE")
                .location("Punjab")
                .datePosted(LocalDate.of(1999,10,1))
                .startingSalary(1000.0)
                .endingSalary(2000.0)
                .description("SD PP")
                .gender("Male")
                .minYearsOfExperience(1.5)
                .maxYearsOfExperience(2.5)
                .language("Punjabi")
                .timings("5-9")
                .vacancies(10)
                .recruiterContact("12345")
                .build();
        jobRepository.save(job);
    }

    public void saveEmployer() {
        Employer employer = Employer.builder()
                .firstName("Venky")
                .middleName("VJ")
                .lastName("Jain")
                .contactNumber("8284911612")
                .gender("Male")
                .dateOfBirth(LocalDate.of(1999,10,1))
                .description("I am employer.")
                .companyName("Microsoft")
                .build();
        employerRepository.save(employer);
    }
}

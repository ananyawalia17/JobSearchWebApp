package com.example.jobApp.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JobDTO {

    private Integer jobId;

    private String jobTitle;

    private String company;

    private String jobCategory;

    private String jobType;

    private String location;

    private LocalDate datePosted;

    private Double startingSalary;

    private Double endingSalary;

    private String description;

    private String gender;

    private Double minYearsOfExperience;

    private Double maxYearsOfExperience;

    private String language;

    private String timings;

    private Integer vacancies;

    private String recruiterContact;

}

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
public class JobSeekerDTO {

    private String firstName;

    private String middleName;

    private String lastName;

    private String contactNumber;

    private String gender;

    private String jobTitle;

    private Double yearsOfExperience;

    private String education;

    private String location;

    private LocalDate dateOfBirth;

    private String description;

    private String language;

    private String password;

}

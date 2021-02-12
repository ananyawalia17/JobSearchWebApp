package com.example.jobApp.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JobSeeker extends AbstractEntity<Integer> {

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

    @OneToMany(mappedBy = "jobSeeker")
    private List<JobHistory> jobHistoryList;
}

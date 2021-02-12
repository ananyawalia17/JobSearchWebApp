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
public class Employer extends AbstractEntity<Integer> {

    private String firstName;

    private String middleName;

    private String lastName;

    private String contactNumber;

    private String gender;

    private LocalDate dateOfBirth;

    private String description;

    private String companyName;

    @OneToMany(mappedBy = "employer")
    private List<Job> postedJobs;

}

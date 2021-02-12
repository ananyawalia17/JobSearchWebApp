package com.example.jobApp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Job extends AbstractEntity<Integer> {

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

    @OneToMany(mappedBy = "job")
    private List<JobHistory> jobHistoryList;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "employer_id")
    private Employer employer;

}

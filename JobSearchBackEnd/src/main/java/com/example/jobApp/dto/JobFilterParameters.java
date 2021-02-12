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
public class JobFilterParameters {

    private String contactNo;

    private String jobCategory;

    private String location;

    private Double startingSalary;

    private Double endingSalary;

    private Double experience;

}

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
public class EmployerDTO {

    private String firstName;

    private String middleName;

    private String lastName;

    private String contactNumber;

    private String gender;

    private LocalDate dateOfBirth;

    private String description;

    private String companyName;

    private String password;

}

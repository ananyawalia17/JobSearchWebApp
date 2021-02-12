package com.example.jobApp.service;

import com.example.jobApp.dto.EmployerDTO;
import com.example.jobApp.dto.JobSeekerDTO;
import com.example.jobApp.response.GenericApiDataResponse;
import com.example.jobApp.response.GenericApiResponse;

public interface UserService {

    GenericApiResponse registerJobSeeker(JobSeekerDTO jobSeekerDTO);

    GenericApiResponse registerEmployer(EmployerDTO employerDTO);

    GenericApiResponse loginUser(String contactNo, String password, String userType);

    GenericApiDataResponse<EmployerDTO> fetchEmployerDetails(String contactNo);

    GenericApiDataResponse<JobSeekerDTO> fetchJobSeekerDetails(String contactNo);

}

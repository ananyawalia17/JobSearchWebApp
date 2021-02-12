package com.example.jobApp.service.impl;

import com.example.jobApp.dto.EmployerDTO;
import com.example.jobApp.dto.JobSeekerDTO;
import com.example.jobApp.entity.Employer;
import com.example.jobApp.entity.JobSeeker;
import com.example.jobApp.entity.RegisteredUser;
import com.example.jobApp.repository.EmployerRepository;
import com.example.jobApp.repository.JobSeekerRepository;
import com.example.jobApp.repository.RegisteredUserRepository;
import com.example.jobApp.response.GenericApiDataResponse;
import com.example.jobApp.response.GenericApiResponse;
import com.example.jobApp.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private EmployerRepository employerRepository;

    @Autowired
    private JobSeekerRepository jobSeekerRepository;

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

    @Override
    public GenericApiResponse registerJobSeeker(JobSeekerDTO jobSeekerDTO) {
        try {
            JobSeeker existingJobSeeker = jobSeekerRepository.findByContactNumber(jobSeekerDTO.getContactNumber());
            if (Objects.nonNull(existingJobSeeker)) {
                return new GenericApiResponse(false, "User with same contact number already exists. Kindly login with same contact number.");
            }
            JobSeeker jobSeeker = JobSeeker.builder()
                    .firstName(jobSeekerDTO.getFirstName())
                    .middleName(jobSeekerDTO.getMiddleName())
                    .lastName(jobSeekerDTO.getLastName())
                    .contactNumber(jobSeekerDTO.getContactNumber())
                    .gender(jobSeekerDTO.getGender())
                    .jobTitle(jobSeekerDTO.getJobTitle())
                    .yearsOfExperience(jobSeekerDTO.getYearsOfExperience())
                    .education(jobSeekerDTO.getEducation())
                    .location(jobSeekerDTO.getLocation())
                    .dateOfBirth(jobSeekerDTO.getDateOfBirth())
                    .language(jobSeekerDTO.getLanguage())
                    .description(jobSeekerDTO.getDescription())
                    .build();
            jobSeekerRepository.save(jobSeeker);
            RegisteredUser registeredUser = RegisteredUser.builder()
                    .contactNo(jobSeekerDTO.getContactNumber())
                    .password(jobSeekerDTO.getPassword())
                    .userType("job_seeker")
                    .build();
            registeredUserRepository.save(registeredUser);
            return new GenericApiResponse(true, "Registration Successful.");
        } catch (Exception e) {
            log.error("register_job_seeker_error: jobSeeker:{} with exception:{}", jobSeekerDTO, e);
            return new GenericApiResponse(false, "Some Error occurred.");
        }
    }

    @Override
    public GenericApiResponse registerEmployer(EmployerDTO employerDTO) {
        try {
            Employer existingEmployer = employerRepository.findByContactNumber(employerDTO.getContactNumber());
            if (Objects.nonNull(existingEmployer)) {
                return new GenericApiResponse(false, "User with same contact number already exists. Kindly login with same contact number.");
            }
            Employer employer = Employer.builder()
                    .firstName(employerDTO.getFirstName())
                    .middleName(employerDTO.getMiddleName())
                    .lastName(employerDTO.getLastName())
                    .contactNumber(employerDTO.getContactNumber())
                    .gender(employerDTO.getGender())
                    .dateOfBirth(employerDTO.getDateOfBirth())
                    .description(employerDTO.getDescription())
                    .companyName(employerDTO.getCompanyName())
                    .build();
            employerRepository.save(employer);
            RegisteredUser registeredUser = RegisteredUser.builder()
                    .contactNo(employerDTO.getContactNumber())
                    .password(employerDTO.getPassword())
                    .userType("employer")
                    .build();
            registeredUserRepository.save(registeredUser);
            return new GenericApiResponse(true, "Registration Successful.");
        } catch (Exception e) {
            log.error("register_employer_error: employer:{} with exception:{}", employerDTO, e);
            return new GenericApiResponse(false, "Some Error occurred.");
        }
    }

    @Override
    public GenericApiResponse loginUser(String contactNo, String password, String userType) {
        try {
            RegisteredUser registeredUser = registeredUserRepository.findByContactNoAndPasswordAndUserType(contactNo, password, userType);
            if (Objects.isNull(registeredUser)) {
                return new GenericApiResponse(false, "Incorrect Credentials. Please enter Valid Credentials.");
            } else {
                return new GenericApiResponse(true, "Successfully logged in.");
            }
        } catch (Exception e) {
            log.error("login_user_error: contactNo:{}, userType:{} with exception:{}", contactNo, userType, e);
            return new GenericApiResponse(false, "Some Error occurred.");
        }
    }

    @Override
    public GenericApiDataResponse<EmployerDTO> fetchEmployerDetails(String contactNo) {
        try {
            Employer employer = employerRepository.findByContactNumber(contactNo);
            EmployerDTO employerDTO = EmployerDTO.builder()
                    .firstName(employer.getFirstName())
                    .middleName(employer.getMiddleName())
                    .lastName(employer.getLastName())
                    .contactNumber(employer.getContactNumber())
                    .gender(employer.getGender())
                    .dateOfBirth(employer.getDateOfBirth())
                    .description(employer.getDescription())
                    .companyName(employer.getCompanyName())
                    .build();
            return new GenericApiDataResponse<>(true, "Success", employerDTO);
        } catch (Exception e) {
            log.error("fetch_employer_error: contactNo:{} with exception:{}", contactNo, e);
            return new GenericApiDataResponse<>(false, "Some error occurred", null);
        }
    }

    @Override
    public GenericApiDataResponse<JobSeekerDTO> fetchJobSeekerDetails(String contactNo) {
        try {
            JobSeeker jobSeeker = jobSeekerRepository.findByContactNumber(contactNo);
            JobSeekerDTO jobSeekerDTO = JobSeekerDTO.builder()
                    .firstName(jobSeeker.getFirstName())
                    .middleName(jobSeeker.getMiddleName())
                    .lastName(jobSeeker.getLastName())
                    .contactNumber(jobSeeker.getContactNumber())
                    .gender(jobSeeker.getGender())
                    .jobTitle(jobSeeker.getJobTitle())
                    .yearsOfExperience(jobSeeker.getYearsOfExperience())
                    .education(jobSeeker.getEducation())
                    .location(jobSeeker.getLocation())
                    .dateOfBirth(jobSeeker.getDateOfBirth())
                    .description(jobSeeker.getDescription())
                    .language(jobSeeker.getLanguage())
                    .build();
            return new GenericApiDataResponse<>(true, "Success", jobSeekerDTO);
        } catch (Exception e) {
            log.error("fetch_job_seeker_error: contactNo:{} with exception:{}", contactNo, e);
            return new GenericApiDataResponse<>(false, "Some error occurred", null);
        }
    }

}

package com.example.jobApp.controller;

import com.example.jobApp.dto.EmployerDTO;
import com.example.jobApp.dto.JobSeekerDTO;
import com.example.jobApp.response.GenericApiDataResponse;
import com.example.jobApp.response.GenericApiResponse;
import com.example.jobApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.POST, value = "/registerJobSeeker")
    public GenericApiResponse registerJobSeeker(@RequestBody JobSeekerDTO jobSeekerDTO) {
        return userService.registerJobSeeker(jobSeekerDTO);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/registerEmployer")
    public GenericApiResponse registerEmployer(@RequestBody EmployerDTO employerDTO) {
        return userService.registerEmployer(employerDTO);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/loginUser")
    public GenericApiResponse loginUser(@RequestParam String contactNo, @RequestParam String password, @RequestParam String userType) {
        return userService.loginUser(contactNo, password, userType);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/fetchEmployerDetails")
    public GenericApiDataResponse<EmployerDTO> fetchEmployerDetails(@RequestParam String contactNo) {
        return userService.fetchEmployerDetails(contactNo);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/fetchJobSeekerDetails")
    public GenericApiDataResponse<JobSeekerDTO> fetchJobSeekerDetails(@RequestParam String contactNo) {
        return userService.fetchJobSeekerDetails(contactNo);
    }

}

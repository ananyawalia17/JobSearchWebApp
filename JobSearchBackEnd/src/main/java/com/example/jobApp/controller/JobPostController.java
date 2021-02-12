package com.example.jobApp.controller;

import com.example.jobApp.dto.JobDTO;
import com.example.jobApp.dto.JobSeekerDTO;
import com.example.jobApp.response.GenericApiDataResponse;
import com.example.jobApp.response.GenericApiResponse;
import com.example.jobApp.service.JobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/jobPost")
public class JobPostController {

    @Autowired
    private JobPostService jobPostService;

    @RequestMapping(method = RequestMethod.POST, value = "/postAJob")
    public GenericApiResponse postAJob(@RequestParam String contactNo, @RequestBody JobDTO jobDTO) {
        return jobPostService.postAJob(contactNo, jobDTO);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getPostedJobHistory")
    public GenericApiDataResponse<List<JobDTO>> getPostedJobHistory(@RequestParam String contactNo) {
        return jobPostService.getPostedJobHistory(contactNo);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getApplicantsForAJob")
    public GenericApiDataResponse<List<JobSeekerDTO>> getApplicantsForAJob(@RequestParam Integer jobId) {
        return jobPostService.getApplicantsForAJob(jobId);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/changeStatusForAJob")
    public GenericApiResponse changeStatusForAJob(@RequestParam Integer jobId, @RequestParam String jobSeekerContactNo, @RequestParam String status) {
        return jobPostService.changeStatusForAJob(jobId, jobSeekerContactNo, status);
    }
}

package com.example.jobApp.controller;

import com.example.jobApp.dto.JobDTO;
import com.example.jobApp.dto.JobFilterParameters;
import com.example.jobApp.entity.Job;
import com.example.jobApp.response.GenericApiDataResponse;
import com.example.jobApp.response.GenericApiResponse;
import com.example.jobApp.service.JobSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/jobSearch")
public class JobSearchController {

    @Autowired
    private JobSearchService jobSearchService;

    @RequestMapping(method = RequestMethod.GET, value = "/fetchJobs")
    public GenericApiDataResponse<List<JobDTO>> fetchJobs() {
        return jobSearchService.fetchJobs();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/applyForAJob")
    public GenericApiResponse applyForAJob(@RequestParam Integer jobId, @RequestParam String contactNo) {
        return jobSearchService.applyForAJob(jobId, contactNo);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/fetchJobHistory")
    public GenericApiDataResponse<List<JobDTO>> fetchJobHistory(@RequestParam String contactNo) {
        return jobSearchService.fetchJobHistory(contactNo);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/fetchJobByLocation")
    public GenericApiDataResponse<List<JobDTO>> fetchJobByLocation(@RequestParam String location) {
        return jobSearchService.fetchJobByLocation(location);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/fetchJobByJobCategory")
    public GenericApiDataResponse<List<JobDTO>> fetchJobByJobCategory(@RequestParam String jobCategory) {
        return jobSearchService.fetchJobByJobCategory(jobCategory);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/fetchJobByLocationAndJobCategory")
    public GenericApiDataResponse<List<JobDTO>> fetchJobByLocationAndJobCategory(@RequestParam String location, @RequestParam String jobCategory) {
        return jobSearchService.fetchJobByLocationAndJobCategory(location, jobCategory);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/fetchJobBySpecifiedFilters")
    public GenericApiDataResponse<List<JobDTO>> fetchJobBySpecifiedFilters(@RequestBody JobFilterParameters jobFilterParameters) {
        return jobSearchService.fetchJobBySpecifiedFilters(jobFilterParameters);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/fetchInitialJobFeed")
    public GenericApiDataResponse<List<JobDTO>> fetchInitialJobFeed(@RequestParam String contactNo) {
        return jobSearchService.fetchInitialJobFeed(contactNo);
    }

}

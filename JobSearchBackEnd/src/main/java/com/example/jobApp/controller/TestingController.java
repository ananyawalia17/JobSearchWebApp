package com.example.jobApp.controller;

import com.example.jobApp.entity.Job;
import com.example.jobApp.entity.JobSeeker;
import com.example.jobApp.service.TestingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/testing")
public class TestingController {

    @Autowired
    private TestingService testingService;

    @RequestMapping(method = RequestMethod.POST, value = "/saveJob")
    public void saveJob() {
        testingService.saveJob();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/saveJobSeeker")
    public void saveJobSeeker() {
        testingService.saveJobSeeker();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/fetchJob")
    public Job fetchJob(@RequestParam Integer jobId) {
        return testingService.fetchJob(jobId);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/fetchJobSeeker")
    public JobSeeker fetchJobSeeker(@RequestParam String contactNo) {
        return testingService.fetchJobSeeker(contactNo);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/saveEmployer")
    public void saveEmployer() {
        testingService.saveEmployer();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/healthCheck")
    public String healthCheck() {
        return "All is well!!";
    }

}

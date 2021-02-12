package com.example.jobApp.service;

import com.example.jobApp.dto.JobDTO;
import com.example.jobApp.dto.JobFilterParameters;

import com.example.jobApp.response.GenericApiDataResponse;
import com.example.jobApp.response.GenericApiResponse;

import java.util.List;

public interface JobSearchService {

    GenericApiResponse applyForAJob(Integer jobId, String contactNo);

    GenericApiDataResponse<List<JobDTO>> fetchJobs();

    GenericApiDataResponse<List<JobDTO>> fetchJobHistory(String contactNo);

    GenericApiDataResponse<List<JobDTO>> fetchJobByLocation(String location);

    GenericApiDataResponse<List<JobDTO>> fetchJobByJobCategory(String jobCategory);

    GenericApiDataResponse<List<JobDTO>> fetchJobByLocationAndJobCategory(String location, String jobCategory);

    GenericApiDataResponse<List<JobDTO>> fetchJobBySpecifiedFilters(JobFilterParameters jobFilterParameters);

    GenericApiDataResponse<List<JobDTO>> fetchInitialJobFeed(String contactNo);

}

package com.example.jobApp.service;

import com.example.jobApp.dto.JobDTO;
import com.example.jobApp.dto.JobSeekerDTO;
import com.example.jobApp.response.GenericApiDataResponse;
import com.example.jobApp.response.GenericApiResponse;

import java.util.List;

public interface JobPostService {

    GenericApiResponse postAJob(String contactNo, JobDTO jobDTO);

    GenericApiDataResponse<List<JobDTO>> getPostedJobHistory(String contactNo);

    GenericApiDataResponse<List<JobSeekerDTO>> getApplicantsForAJob(Integer jobId);

    GenericApiResponse changeStatusForAJob(Integer jobId, String jobSeekerContactNo, String status);

}

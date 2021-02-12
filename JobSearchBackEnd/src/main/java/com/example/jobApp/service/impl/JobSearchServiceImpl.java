package com.example.jobApp.service.impl;

import com.example.jobApp.dto.JobDTO;
import com.example.jobApp.dto.JobFilterParameters;
import com.example.jobApp.entity.Job;
import com.example.jobApp.entity.JobHistory;
import com.example.jobApp.entity.JobSeeker;
import com.example.jobApp.repository.JobHistoryRepository;
import com.example.jobApp.repository.JobRepository;
import com.example.jobApp.repository.JobSeekerRepository;
import com.example.jobApp.response.GenericApiDataResponse;
import com.example.jobApp.response.GenericApiResponse;
import com.example.jobApp.service.JobSearchService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class JobSearchServiceImpl implements JobSearchService {

    private static final Logger log = LoggerFactory.getLogger(JobSearchServiceImpl.class);

    @Autowired
    private JobSeekerRepository jobSeekerRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private JobHistoryRepository jobHistoryRepository;

    @Override
    public GenericApiResponse applyForAJob(Integer jobId, String contactNo) {
        try {
            Optional<Job> job = jobRepository.findById(jobId);
            if (job.isPresent()) {
                JobSeeker jobSeeker = jobSeekerRepository.findByContactNumber(contactNo);
                JobHistory jobHistory = JobHistory.builder()
                        .job(job.get())
                        .jobSeeker(jobSeeker)
                        .status("Applied")
                        .build();
                jobHistoryRepository.save(jobHistory);
                return new GenericApiResponse(true, "Successfully applied for the job.");
            } else {
                return new GenericApiResponse(false, "Job Doesn't Exist.");
            }
        } catch (Exception e) {
            log.error("apply_job_error: jobId:{}, contactNo:{} with exception:{}",jobId,contactNo,e);
            return new GenericApiResponse(false, "Some Error Occurred.");
        }
    }

    @Override
    public GenericApiDataResponse<List<JobDTO>> fetchJobs() {
        try {
            List<Job> jobs = jobRepository.findAllByOrderByDatePosted();
            List<JobDTO> jobDTOs = new ArrayList<>();
            jobs.forEach(job -> {
                JobDTO jobDTO = JobDTO.builder()
                        .jobId(job.getId())
                        .company(job.getCompany())
                        .datePosted(job.getDatePosted())
                        .description(job.getDescription())
                        .startingSalary(job.getStartingSalary())
                        .endingSalary(job.getEndingSalary())
                        .minYearsOfExperience(job.getMinYearsOfExperience())
                        .maxYearsOfExperience(job.getMaxYearsOfExperience())
                        .gender(job.getGender())
                        .jobCategory(job.getJobCategory())
                        .jobTitle(job.getJobTitle())
                        .jobType(job.getJobType())
                        .language(job.getLanguage())
                        .location(job.getLocation())
                        .vacancies(job.getVacancies())
                        .timings(job.getTimings())
                        .recruiterContact(job.getRecruiterContact())
                        .build();
                jobDTOs.add(jobDTO);
            });
            return new GenericApiDataResponse<>(true, "Success", jobDTOs);
        } catch (Exception e) {
            log.error("job_fetch_error: exception: " + e);
            return new GenericApiDataResponse<>(false, "Some Error Occurred.",null);
        }
    }

    @Override
    public GenericApiDataResponse<List<JobDTO>> fetchJobHistory(String contactNo) {
        try {
            JobSeeker jobSeeker = jobSeekerRepository.findByContactNumber(contactNo);
            List<JobDTO> appliedJobs = new ArrayList<>();
            List<JobHistory> jobHistoryList = jobSeeker.getJobHistoryList();
            jobHistoryList.forEach(jobHistory -> {
                Job job = jobHistory.getJob();
                JobDTO appliedJob = JobDTO.builder()
                        .jobId(job.getId())
                        .company(job.getCompany())
                        .datePosted(job.getDatePosted())
                        .description(job.getDescription())
                        .startingSalary(job.getStartingSalary())
                        .endingSalary(job.getEndingSalary())
                        .minYearsOfExperience(job.getMinYearsOfExperience())
                        .maxYearsOfExperience(job.getMaxYearsOfExperience())
                        .gender(job.getGender())
                        .jobCategory(job.getJobCategory())
                        .jobTitle(job.getJobTitle())
                        .jobType(job.getJobType())
                        .language(job.getLanguage())
                        .location(job.getLocation())
                        .vacancies(job.getVacancies())
                        .timings(job.getTimings())
                        .recruiterContact(job.getRecruiterContact())
                        .build();
                appliedJobs.add(appliedJob);
            });
            return new GenericApiDataResponse<>(true, "Success", appliedJobs);
        } catch (Exception e) {
            log.error("job__history_fetch_error: contactNo:{} with exception: {}", contactNo, e);
            return new GenericApiDataResponse<>(false, "Some Error Occurred.",null);
        }
    }

    @Override
    public GenericApiDataResponse<List<JobDTO>> fetchJobByLocation(String location) {
        try {
            List<Job> jobs = jobRepository.findByLocation(location);
            List<JobDTO> jobDTOs = new ArrayList<>();
            jobs.forEach(job -> {
                JobDTO jobDTO = JobDTO.builder()
                        .jobId(job.getId())
                        .company(job.getCompany())
                        .datePosted(job.getDatePosted())
                        .description(job.getDescription())
                        .startingSalary(job.getStartingSalary())
                        .endingSalary(job.getEndingSalary())
                        .minYearsOfExperience(job.getMinYearsOfExperience())
                        .maxYearsOfExperience(job.getMaxYearsOfExperience())
                        .gender(job.getGender())
                        .jobCategory(job.getJobCategory())
                        .jobTitle(job.getJobTitle())
                        .jobType(job.getJobType())
                        .language(job.getLanguage())
                        .location(job.getLocation())
                        .vacancies(job.getVacancies())
                        .timings(job.getTimings())
                        .recruiterContact(job.getRecruiterContact())
                        .build();
                jobDTOs.add(jobDTO);
            });
            return new GenericApiDataResponse<>(true, "Success", jobDTOs);
        } catch (Exception e) {
            log.error("job_fetch_by_location_error: exception: " + e);
            return new GenericApiDataResponse<>(false, "Some Error Occurred.",null);
        }
    }

    @Override
    public GenericApiDataResponse<List<JobDTO>> fetchJobByJobCategory(String jobCategory) {
        try {
            List<Job> jobs = jobRepository.findByJobCategory(jobCategory);
            List<JobDTO> jobDTOs = new ArrayList<>();
            jobs.forEach(job -> {
                JobDTO jobDTO = JobDTO.builder()
                        .jobId(job.getId())
                        .company(job.getCompany())
                        .datePosted(job.getDatePosted())
                        .description(job.getDescription())
                        .startingSalary(job.getStartingSalary())
                        .endingSalary(job.getEndingSalary())
                        .minYearsOfExperience(job.getMinYearsOfExperience())
                        .maxYearsOfExperience(job.getMaxYearsOfExperience())
                        .gender(job.getGender())
                        .jobCategory(job.getJobCategory())
                        .jobTitle(job.getJobTitle())
                        .jobType(job.getJobType())
                        .language(job.getLanguage())
                        .location(job.getLocation())
                        .vacancies(job.getVacancies())
                        .timings(job.getTimings())
                        .recruiterContact(job.getRecruiterContact())
                        .build();
                jobDTOs.add(jobDTO);
            });
            return new GenericApiDataResponse<>(true, "Success", jobDTOs);
        } catch (Exception e) {
            log.error("job_fetch_by_job_category_error: exception: " + e);
            return new GenericApiDataResponse<>(false, "Some Error Occurred.",null);
        }
    }

    @Override
    public GenericApiDataResponse<List<JobDTO>> fetchJobByLocationAndJobCategory(String location, String jobCategory) {
        try {
            List<Job> jobs = jobRepository.findByJobCategoryAndLocation(jobCategory, location);
            List<JobDTO> jobDTOs = new ArrayList<>();
            jobs.forEach(job -> {
                JobDTO jobDTO = JobDTO.builder()
                        .jobId(job.getId())
                        .company(job.getCompany())
                        .datePosted(job.getDatePosted())
                        .description(job.getDescription())
                        .startingSalary(job.getStartingSalary())
                        .endingSalary(job.getEndingSalary())
                        .minYearsOfExperience(job.getMinYearsOfExperience())
                        .maxYearsOfExperience(job.getMaxYearsOfExperience())
                        .gender(job.getGender())
                        .jobCategory(job.getJobCategory())
                        .jobTitle(job.getJobTitle())
                        .jobType(job.getJobType())
                        .language(job.getLanguage())
                        .location(job.getLocation())
                        .vacancies(job.getVacancies())
                        .timings(job.getTimings())
                        .recruiterContact(job.getRecruiterContact())
                        .build();
                jobDTOs.add(jobDTO);
            });
            return new GenericApiDataResponse<>(true, "Success", jobDTOs);
        } catch (Exception e) {
            log.error("job_fetch_by_job_category_and_location_error: exception: " + e);
            return new GenericApiDataResponse<>(false, "Some Error Occurred.",null);
        }
    }

    @Override
    public GenericApiDataResponse<List<JobDTO>> fetchJobBySpecifiedFilters(JobFilterParameters jobFilterParameters) {
        try {
            setEmptyAttributesAsDefaultValues(jobFilterParameters);
            JobSeeker jobSeeker = jobSeekerRepository.findByContactNumber(jobFilterParameters.getContactNo());
            Set<Integer> appliedJobIds = new HashSet<>();
            jobSeeker.getJobHistoryList().forEach(jobHistory -> {
                appliedJobIds.add(jobHistory.getJob().getId());
            });
            List<Job> jobs = new ArrayList<>();
            if (Objects.isNull(jobFilterParameters.getExperience())) {
                jobs = jobRepository.findJobByGivenParametersWithoutExperience(jobFilterParameters.getJobCategory(), jobFilterParameters.getLocation(), jobFilterParameters.getStartingSalary(), jobFilterParameters.getEndingSalary());
            } else {
                jobs = jobRepository.findJobByGivenParameters(jobFilterParameters.getJobCategory(), jobFilterParameters.getLocation(), jobFilterParameters.getStartingSalary(), jobFilterParameters.getEndingSalary(), jobFilterParameters.getExperience());
            }
            List<JobDTO> jobDTOs = new ArrayList<>();
            jobs.forEach(job -> {
                if(!appliedJobIds.contains(job.getId())) {
                    JobDTO jobDTO = JobDTO.builder()
                            .jobId(job.getId())
                            .company(job.getCompany())
                            .datePosted(job.getDatePosted())
                            .description(job.getDescription())
                            .startingSalary(job.getStartingSalary())
                            .endingSalary(job.getEndingSalary())
                            .minYearsOfExperience(job.getMinYearsOfExperience())
                            .maxYearsOfExperience(job.getMaxYearsOfExperience())
                            .gender(job.getGender())
                            .jobCategory(job.getJobCategory())
                            .jobTitle(job.getJobTitle())
                            .jobType(job.getJobType())
                            .language(job.getLanguage())
                            .location(job.getLocation())
                            .vacancies(job.getVacancies())
                            .timings(job.getTimings())
                            .recruiterContact(job.getRecruiterContact())
                            .build();
                    jobDTOs.add(jobDTO);
                }
            });
            return new GenericApiDataResponse<>(true, "Success", jobDTOs);
        } catch (Exception e) {
            log.error("fetch_job_by_specified_filters: jobFilters:{} exception:{} ",jobFilterParameters,e);
            return new GenericApiDataResponse<>(false, "Some Error Occurred.",null);
        }
    }

    @Override
    public GenericApiDataResponse<List<JobDTO>> fetchInitialJobFeed(String contactNo) {
        try {
            JobSeeker jobSeeker = jobSeekerRepository.findByContactNumber(contactNo);
            List<Job> jobs = jobRepository.findByJobCategoryAndLocation(jobSeeker.getJobTitle(), jobSeeker.getLocation());
            Set<Integer> appliedJobIds = new HashSet<>();
            jobSeeker.getJobHistoryList().forEach(jobHistory -> {
                appliedJobIds.add(jobHistory.getJob().getId());
            });
            List<JobDTO> jobDTOs = new ArrayList<>();
            jobs.forEach(job -> {
                if(!appliedJobIds.contains(job.getId())) {
                    JobDTO jobDTO = JobDTO.builder()
                            .jobId(job.getId())
                            .company(job.getCompany())
                            .datePosted(job.getDatePosted())
                            .description(job.getDescription())
                            .startingSalary(job.getStartingSalary())
                            .endingSalary(job.getEndingSalary())
                            .minYearsOfExperience(job.getMinYearsOfExperience())
                            .maxYearsOfExperience(job.getMaxYearsOfExperience())
                            .gender(job.getGender())
                            .jobCategory(job.getJobCategory())
                            .jobTitle(job.getJobTitle())
                            .jobType(job.getJobType())
                            .language(job.getLanguage())
                            .location(job.getLocation())
                            .vacancies(job.getVacancies())
                            .timings(job.getTimings())
                            .recruiterContact(job.getRecruiterContact())
                            .build();
                    jobDTOs.add(jobDTO);
                }
            });
            return new GenericApiDataResponse<>(true, "Success", jobDTOs);
        } catch (Exception e) {
            log.error("fetch_initial_job_feed_error: exception: " + e);
            return new GenericApiDataResponse<>(false, "Some Error Occurred.",null);
        }
    }

    private void setEmptyAttributesAsDefaultValues(JobFilterParameters jobFilterParameters) {
        JobSeeker jobSeeker = jobSeekerRepository.findByContactNumber(jobFilterParameters.getContactNo());
        if (Objects.isNull(jobFilterParameters.getLocation())) {
            jobFilterParameters.setLocation(jobSeeker.getLocation());
        }
        if (Objects.isNull(jobFilterParameters.getJobCategory())) {
            jobFilterParameters.setJobCategory(jobSeeker.getJobTitle());
        }
        if (Objects.isNull(jobFilterParameters.getStartingSalary()) || Objects.isNull(jobFilterParameters.getEndingSalary())) {
            jobFilterParameters.setStartingSalary(0.0);
            jobFilterParameters.setEndingSalary(100000000.0);
        }
    }
}

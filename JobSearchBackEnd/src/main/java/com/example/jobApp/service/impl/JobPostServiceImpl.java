package com.example.jobApp.service.impl;

import com.example.jobApp.dto.JobDTO;
import com.example.jobApp.dto.JobSeekerDTO;
import com.example.jobApp.entity.Employer;
import com.example.jobApp.entity.Job;
import com.example.jobApp.entity.JobHistory;
import com.example.jobApp.entity.JobSeeker;
import com.example.jobApp.repository.EmployerRepository;
import com.example.jobApp.repository.JobHistoryRepository;
import com.example.jobApp.repository.JobRepository;
import com.example.jobApp.repository.JobSeekerRepository;
import com.example.jobApp.response.GenericApiDataResponse;
import com.example.jobApp.response.GenericApiResponse;
import com.example.jobApp.service.JobPostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobPostServiceImpl implements JobPostService {

    private static final Logger log = LoggerFactory.getLogger(JobSearchServiceImpl.class);

    @Autowired
    private EmployerRepository employerRepository;

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private JobSeekerRepository jobSeekerRepository;

    @Autowired
    private JobHistoryRepository jobHistoryRepository;

    @Override
    public GenericApiResponse postAJob(String contactNo, JobDTO jobDTO) {
        try {
            Employer employer = employerRepository.findByContactNumber(contactNo);
            Job job = Job.builder()
                    .jobTitle(jobDTO.getJobTitle())
                    .company(jobDTO.getCompany())
                    .jobCategory(jobDTO.getJobCategory())
                    .jobType(jobDTO.getJobType())
                    .location(jobDTO.getLocation())
                    .datePosted(jobDTO.getDatePosted())
                    .startingSalary(jobDTO.getStartingSalary())
                    .endingSalary(jobDTO.getEndingSalary())
                    .description(jobDTO.getDescription())
                    .gender(jobDTO.getGender())
                    .minYearsOfExperience(jobDTO.getMinYearsOfExperience())
                    .maxYearsOfExperience(jobDTO.getMaxYearsOfExperience())
                    .language(jobDTO.getLanguage())
                    .timings(jobDTO.getTimings())
                    .vacancies(jobDTO.getVacancies())
                    .recruiterContact(jobDTO.getRecruiterContact())
                    .employer(employer)
                    .build();
            jobRepository.save(job);
            return new GenericApiResponse(true, "Job Posted Successfully.");
        } catch (Exception e) {
            log.error("job_post_error: contactNo:{}, job:{} with exception:{}",contactNo, jobDTO, e);
            return new GenericApiResponse(false, "Some Error Occurred while Posting the job.");
        }
    }

    @Override
    public GenericApiDataResponse<List<JobDTO>> getPostedJobHistory(String contactNo) {
        try {
            Employer employer = employerRepository.findByContactNumber(contactNo);
            List<JobDTO> jobDTOs = new ArrayList<>();
            List<Job> postedJobs = employer.getPostedJobs();
            postedJobs.forEach(postedJob -> {
                JobDTO jobDTO = JobDTO.builder()
                        .jobId(postedJob.getId())
                        .company(postedJob.getCompany())
                        .datePosted(postedJob.getDatePosted())
                        .description(postedJob.getDescription())
                        .startingSalary(postedJob.getStartingSalary())
                        .endingSalary(postedJob.getEndingSalary())
                        .minYearsOfExperience(postedJob.getMinYearsOfExperience())
                        .maxYearsOfExperience(postedJob.getMaxYearsOfExperience())
                        .gender(postedJob.getGender())
                        .jobCategory(postedJob.getJobCategory())
                        .jobTitle(postedJob.getJobTitle())
                        .jobType(postedJob.getJobType())
                        .language(postedJob.getLanguage())
                        .location(postedJob.getLocation())
                        .vacancies(postedJob.getVacancies())
                        .timings(postedJob.getTimings())
                        .recruiterContact(postedJob.getRecruiterContact())
                        .build();
                jobDTOs.add(jobDTO);
            });
            return new GenericApiDataResponse<>(true, "Success", jobDTOs);
        } catch (Exception e) {
            log.error("posted_job_history_error: contactNo:{} with exception:{} " ,contactNo, e);
            return new GenericApiDataResponse<>(false, "Some Error Occurred.",null);
        }
    }

    @Override
    public GenericApiDataResponse<List<JobSeekerDTO>> getApplicantsForAJob(Integer jobId) {
        try {
            Job job = jobRepository.findById(jobId).get();
            List<JobSeekerDTO> jobSeekerDTOs = new ArrayList<>();
            List<JobHistory> jobHistoryList = job.getJobHistoryList();
            jobHistoryList.forEach(jobHistory -> {
                JobSeeker jobSeeker = jobHistory.getJobSeeker();
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
                jobSeekerDTOs.add(jobSeekerDTO);
            });
            return new GenericApiDataResponse<>(true, "Success", jobSeekerDTOs);
        } catch (Exception e) {
            log.error("get_applicants_for_job: jobId:{} with exception:{} " ,jobId, e);
            return new GenericApiDataResponse<>(false, "Some Error Occurred.",null);
        }
    }

    @Override
    public GenericApiResponse changeStatusForAJob(Integer jobId, String jobSeekerContactNo, String status) {
        try {
            JobSeeker jobSeeker = jobSeekerRepository.findByContactNumber(jobSeekerContactNo);
            jobSeeker.getJobHistoryList().forEach(jobHistory -> {
                if (jobHistory.getJob().getId().equals(jobId)) {
                    jobHistory.setStatus(status);
                    jobHistoryRepository.save(jobHistory);
                }
            });
            return new GenericApiResponse(true, "Status Updated Successfully.");
        } catch (Exception e) {
            log.error("change_status_error: jobId:{}, jobSeekerContactNo:{} with exception:{}",jobId, jobSeekerContactNo, e);
            return new GenericApiResponse(false, "Some error occurred.");
        }
    }

}

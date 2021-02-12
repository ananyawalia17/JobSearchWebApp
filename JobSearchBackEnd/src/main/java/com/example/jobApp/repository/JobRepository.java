package com.example.jobApp.repository;

import com.example.jobApp.entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {

    Optional<Job> findById(Integer id);

    List<Job> findByJobCategory(String jobCategory);

    List<Job> findByLocation(String location);

    List<Job> findByJobCategoryAndLocation(String jobCategory,String location);

    List<Job> findAllByOrderByDatePosted();

    List<Job> findByJobCategoryAndLocationAndStartingSalaryGreaterThanEqualAndEndingSalaryLessThanEqualAndMinYearsOfExperienceGreaterThanEqualAndMaxYearsOfExperienceLessThanEqual(String jobCategory, String location, Double startingSalary, Double endingSalary, Double minYearsOfExperience, Double maxYearsOfExperience);

    List<Job> findByJobCategoryAndLocationAndStartingSalaryGreaterThanEqualAndMinYearsOfExperienceLessThanEqual(String jobCategory, String location, Double salary, Double experience);

    @Query(value = "SELECT * FROM JOB j where j.job_category = :job_category and j.location = :location and (j.starting_salary between :starting_salary and :ending_salary or j.ending_salary between :starting_salary and :ending_salary)", nativeQuery = true)
    List<Job> findJobByGivenParametersWithoutExperience(@Param("job_category") String jobCategory, @Param("location") String location, @Param("starting_salary") Double startingSalary, @Param("ending_salary") Double endingSalary);

    @Query(value = "SELECT * FROM JOB j where j.job_category = :job_category and j.location = :location and (j.starting_salary between :starting_salary and :ending_salary or j.ending_salary between :starting_salary and :ending_salary) and :experience between j.min_years_of_experience and j.max_years_of_experience", nativeQuery = true)
    List<Job> findJobByGivenParameters(@Param("job_category") String jobCategory, @Param("location") String location, @Param("starting_salary") Double startingSalary, @Param("ending_salary") Double endingSalary, @Param("experience") Double experience);

}

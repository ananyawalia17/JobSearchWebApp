package com.example.jobApp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JobHistory extends AbstractEntity<Integer> {

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "jobSeeker_id")
    private JobSeeker jobSeeker;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "job_id")
    private Job job;

    private String status;
}

package com.example.jobApp.repository;

import com.example.jobApp.entity.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, Integer> {

    RegisteredUser findByContactNoAndPasswordAndUserType(String contactNo, String password, String userType);

}

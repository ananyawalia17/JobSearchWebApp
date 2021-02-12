package com.example.jobApp.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GenericApiResponse {

    protected boolean successful;

    protected String message;

}

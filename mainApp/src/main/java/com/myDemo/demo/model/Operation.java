package com.myDemo.demo.model;

import lombok.Data;

@Data
public class Operation {
    private String operationId;
    private String userName;
    private String userId;
    private OperationStatus status;
}

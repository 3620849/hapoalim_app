package com.myDemo.demo.services;

import com.myDemo.demo.model.Operation;
import com.myDemo.demo.model.OperationStatus;

import java.util.HashMap;
import java.util.Map;


public class OperationsStorage {
    Map<String, Operation> map = null;
    public OperationsStorage(){
        map = new HashMap<>();
    }
    public String generateOperationId(){
        return String.valueOf(map.size());
    }

    public void createNewOperation(String opId) {
        Operation op = new Operation();
        op.setOperationId(opId);
        op.setStatus(OperationStatus.NEW);
        map.put(opId,op);
    }

    public Operation getDataById(String operationId) {
        if(map.containsKey(operationId)){
            return map.get(operationId);
        }else {
            Operation op = new Operation();
            op.setStatus(OperationStatus.NOT_EXIST);
            op.setOperationId("-1");
            return op;
        }
    }

    public void updateOperationStatus(String operationId, OperationStatus status) {
        Operation operation = map.get(operationId);
        if(operation!=null) {
            operation.setStatus(status);
        }
    }

    public void updateOperationStatus(String operationId, OperationStatus status, String parseResponse) {
        Operation operation = map.get(operationId);
        if(operation!=null) {
            operation.setStatus(status);
            operation.setUserId(parseResponse);
        }
    }

    public void updateOperationStatus(String operationId, OperationStatus status, String userId, String userName) {
        Operation operation = map.get(operationId);
        if(operation!=null){
            operation.setUserId(userId);
            operation.setUserName(userName);
            operation.setStatus(status);
        }
    }
}

package com.myDemo.demo.controllers;

import com.myDemo.demo.dao.EngineDAO;
import com.myDemo.demo.model.Operation;
import com.myDemo.demo.model.OperationStatus;
import com.myDemo.demo.model.ParseResponse;
import com.myDemo.demo.model.UserData;
import com.myDemo.demo.services.OcrImageParser;
import com.myDemo.demo.services.OperationsStorage;
import com.myDemo.demo.services.SearchEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@RestController
public class ApiController {

    OperationsStorage operationsStorage;
    @Autowired
    OcrImageParser ocrImageParser;
    @Autowired
    SearchEngine searchEngine;
    @Autowired
    EngineDAO solr;

    @PostConstruct
    public void createStorage(){
    //imitation of database in memory
    operationsStorage=new OperationsStorage();
    //if solr empty add this data inside
    if(!solr.existsById("12345")){
            List<UserData> users = new LinkedList<>();
            users.add(new UserData("Eran", "12345"));
            users.add(new UserData("Dima", "123"));
            solr.saveAll(users);
        }
    }

    //WEB API
    @CrossOrigin
    @RequestMapping(value = "/file",method = RequestMethod.POST,produces = "application/json")
    public String loadUserIdFile(@RequestParam("file") MultipartFile file) {
        //generate id for operation and store it in memory
        String opId = operationsStorage.generateOperationId();
        operationsStorage.createNewOperation(opId);
        //in other thread send img to parse
        try {
            ocrImageParser.sendFileToParse(opId,file);
        } catch (IOException e) {
            System.out.println("File can't be found");
            return "-1";
        }
        //return id of operation
    return opId;
    }

    //WEB API
    @CrossOrigin
    @RequestMapping(value = "/getResultById/{id}",method = RequestMethod.GET,produces = "application/json")
    public Operation loadUserIdFile(@PathVariable("id") String operationId) {
      //go to in memory storage and return data
      return operationsStorage.getDataById(operationId);
    }

    //MICROSERVICE API
    //{operationId:"1", parseResponse:"12345",status:}
    @CrossOrigin
    @RequestMapping(value = "/pushNotification",method = RequestMethod.POST)
    public void loadUserIdFile(@RequestBody   ParseResponse parsedObject) {
        //go to in memory storage and update operation object
        if(parsedObject.getStatus().equals("IMG_NOT_RECOGNIZED")){
            operationsStorage.updateOperationStatus(parsedObject.getOperationId(), OperationStatus.IMG_NOT_RECOGNIZED);
        }else {
            operationsStorage.updateOperationStatus(parsedObject.getOperationId(), OperationStatus.IMG_PARSE_COMPLETE,parsedObject.getParseResponse());
            UserData userData = searchEngine.findUserByParsedId(parsedObject.getParseResponse());
            if (userData == null) {
                operationsStorage.updateOperationStatus(parsedObject.getOperationId(), OperationStatus.USER_NOT_FOUND);
            }else {
                operationsStorage.updateOperationStatus(parsedObject.getOperationId(),OperationStatus.OPERATION_COMPLETE,userData.getUserId(),userData.getUserName());
            }
        }
    }

}

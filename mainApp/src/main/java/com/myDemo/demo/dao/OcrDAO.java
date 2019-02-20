package com.myDemo.demo.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class OcrDAO {
    @Autowired
    RestTemplate restTemplate;
    @Value( "${ocrApiUrl}" )
    private String OCR_URL;

    @Async
    public void send(String opId, HttpEntity file){
        ResponseEntity<String> stringResponseEntity = restTemplate.postForEntity(OCR_URL + "/parseImg/" + opId, file, String.class);
    }
}

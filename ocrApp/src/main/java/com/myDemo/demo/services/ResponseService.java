package com.myDemo.demo.services;

import com.myDemo.demo.model.ParseResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ResponseService {
    @Autowired
    RestTemplate restTemplate;
    @Value("${mainAppUrl}")
    private String MAIN_APP_URL;
    public void sendResponse(ParseResponse response) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity entity = new HttpEntity(response,headers);
        String url = MAIN_APP_URL + "/pushNotification";
        ResponseEntity<String> out = restTemplate.exchange(url, HttpMethod.POST,entity,String.class);
    }
}

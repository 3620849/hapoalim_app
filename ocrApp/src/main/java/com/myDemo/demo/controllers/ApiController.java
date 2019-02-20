package com.myDemo.demo.controllers;

import com.myDemo.demo.model.ParseResponse;
import com.myDemo.demo.services.ImgRecognizeService;
import com.myDemo.demo.services.ResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ApiController {
    @Autowired
    ImgRecognizeService imgRecognizeService;
    @Autowired
    ResponseService responseService;

    @CrossOrigin
    @RequestMapping(value = "/parseImg/{id}",method = RequestMethod.POST)
    public void parseImg(@RequestParam("file") MultipartFile file,@PathVariable("id")String operationId) {
        ParseResponse response = new ParseResponse();
        response.setOperationId(operationId);
        response.setStatus("IMG_NOT_RECOGNIZED");
        String result = imgRecognizeService.getUserIdByImg(file);
        if(result!=null){
            response.setStatus("OK");
            response.setParseResponse(result);
        }
        responseService.sendResponse(response);
    }
}

package com.myDemo.demo.services;

import com.myDemo.demo.dao.OcrDAO;
import org.apache.tomcat.util.http.fileupload.MultipartStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class OcrImageParser {
    @Autowired
    OcrDAO ocr;


    public void sendFileToParse(String opId, MultipartFile file) throws IOException {
        MultiValueMap<String, Object> body
                = new LinkedMultiValueMap<>();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);
        headers.set("Content-Disposition","form-data");
        headers.set("filename",file.getOriginalFilename());
            ByteArrayResource bytes = new ByteArrayResource(file.getBytes()) {
                @Override
                public String getFilename() {
                    return file.getOriginalFilename();
                }
            };
            body.add("file", bytes);

        ocr.send(opId, new HttpEntity<>(body, headers));
    }
}

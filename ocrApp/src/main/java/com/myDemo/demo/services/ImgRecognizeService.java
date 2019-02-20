package com.myDemo.demo.services;

import com.asprise.ocr.Ocr;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@Service
public class ImgRecognizeService {

    public String getUserIdByImg(MultipartFile file) {
        File javaFile = multipartToFile(file);
        if(javaFile!=null) {
            Ocr.setUp(); // one time setup
            Ocr ocr = new Ocr(); // create a new OCR engine
            ocr.startEngine("eng", Ocr.SPEED_FASTEST); // English
            String s = ocr.recognize(new File[]{javaFile}, Ocr.RECOGNIZE_TYPE_ALL, Ocr.OUTPUT_FORMAT_PLAINTEXT);
            System.out.println("Result: " + s);
            if( s.startsWith("<error:")){
                System.out.println("cant parse file");
                return null;
            }
            if( s.equals("")){
                System.out.println("img not recognized");
                return null;
            }
            ocr.stopEngine();
        return s;
        }
        return null;
    }

    public File multipartToFile(MultipartFile multipart)
    {
        File convFile = new File(multipart.getOriginalFilename());
        try {
        convFile.createNewFile();
        FileOutputStream fos = new FileOutputStream(convFile);
        fos.write(multipart.getBytes());
        fos.close();
        } catch (IOException e) {
           System.out.println("cant convert MultipartFile file to Java File");
           return null;
       }
        return convFile;
    }
}

package com.myDemo.demo.services;

import com.myDemo.demo.dao.EngineDAO;
import com.myDemo.demo.model.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SearchEngine {
    @Autowired
    EngineDAO engine;

    public UserData findUserByParsedId(String parseResponse) {
        Optional<UserData> result = engine.findById(parseResponse);
        return result.orElse(null);
    }
}

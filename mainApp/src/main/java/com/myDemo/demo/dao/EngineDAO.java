package com.myDemo.demo.dao;

import com.myDemo.demo.model.UserData;
import org.springframework.data.solr.repository.SolrCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EngineDAO extends SolrCrudRepository<UserData,String> {

}

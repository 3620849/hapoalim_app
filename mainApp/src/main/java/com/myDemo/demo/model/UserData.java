package com.myDemo.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.solr.client.solrj.beans.Field;
import org.springframework.data.annotation.Id;
import org.springframework.data.solr.core.mapping.SolrDocument;

@Data
@AllArgsConstructor
@NoArgsConstructor
@SolrDocument(collection = "userData")
public class UserData {
    @Field
    private String userName;
    @Id
    private String userId;

}

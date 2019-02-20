import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  insertData(data:any) { 
    return this.http.post('http://localhost:8080/file', data);
  }
  getOperationResult(operationId:string) {
    return this.http.get('http://localhost:8080/getResultById/'+operationId);
  }

}
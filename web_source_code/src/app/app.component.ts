import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {MyModal} from './myModal.component'
import {FileUploadModule} from 'primeng/fileupload';
import {CardModule} from 'primeng/card';
 
import {Subscription} from 'rxjs';
import { Injectable } from '@angular/core';
import {DataService} from './dataService.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private subscriptions: Array<Subscription> = [];
  showLoadSpinner=false;
  operationNumber:any;
  operationResult:any;
  repeatInterval:any;
  showMessage:string;
  fd:FormData;
  constructor(public modalService: BsModalService, private dataService: DataService){

  }

  openModal(){
    this.modalService.show(MyModal, Object.assign({},{}, { class: 'olololo' }))
  }

  ngOnInit(){
    this.showMessage="please load customer Id image";
    this.operationNumber=0;
  }
  sendImg(event, form){
    this.operationResult=null;
    this.showLoadSpinner=true;
    this.showMessage="waiting server response for operation: "+this.operationNumber;
      this.fd = new FormData();
      this.fd.append('file', event.files[0]);
      this.dataService.insertData(this.fd).subscribe(response=>{
        if(JSON.stringify(response)!="-1"){
          console.log(""+response);
          this.operationNumber=JSON.stringify(response); this.startAskForResponse();
          form.clear();
        }else{
          console.log("wrong file");
          this.clenAll()
        }

      },error=>{console.log("ERRR");form.clear();});      
  }

  checkForResult(opId:string){
    this.dataService.getOperationResult(opId).subscribe(response=>{
        console.log(response);this.operationResult= response;this.showMessage=JSON.stringify(response) },error=>{console.log("ERRR")});
  }
    startAskForResponse(){
      var retry = 0;
      this.repeatInterval = setInterval(()=>{
        ++retry;
        if(retry>20){
          console.log("timeout stoped after 100 retry")
          this.showLoadSpinner=false;
          clearInterval(this.repeatInterval);
        }
        this.checkForResult(this.operationNumber);
        console.log(this.operationResult);
         
        if(this.operationResult && this.operationResult.status){          
            if(this.operationResult.status==="OPERATION_COMPLETE" || this.operationResult.status==="IMG_NOT_RECOGNIZED"){
              clearInterval(this.repeatInterval);
              this.showLoadSpinner=false;
              console.log("OP COMPLETE stop");
              this.operationResult=null;
            }
        }
      },500);
    }  
  
  clenAll(){ 

    this.showMessage="please load customer Id image";
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}

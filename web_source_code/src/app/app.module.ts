import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyModal } from './myModal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {FileUploadModule} from 'primeng/fileupload';
import {CardModule} from 'primeng/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from './dataService.component'

@NgModule({
  declarations: [
    AppComponent,
    MyModal
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    OverlayPanelModule,
    BrowserAnimationsModule,
    FileUploadModule,
    CardModule,
    ProgressSpinnerModule,
    PanelModule,
    HttpClientModule

  ],
  providers: [
    DataService],
  bootstrap: [AppComponent],
  entryComponents:[MyModal]
})
export class AppModule { }

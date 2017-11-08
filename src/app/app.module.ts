import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PipeSQRTPipe } from './pipes/pipe-sqrt.pipe';
import { PipeOutputSQRTPipe } from './pipes/pipe-output-sqrt.pipe';
import { SwitchCaseHappyComponent } from './switch-case-happy/switch-case-happy.component';
import { SwitchCaseSadComponent } from './switch-case-sad/switch-case-sad.component';
import { SwitchCaseAngryComponent } from './switch-case-angry/switch-case-angry.component';
import { SwitchCaseDefaultComponent } from './switch-case-default/switch-case-default.component';
import { MyReverseIfDirective } from './directives/my-reverse-if.directive';
import { MyAtrributeDirectiveDirective } from './directives/my-atrribute-directive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing-module';
import { FormModule } from './modules/form-module';
import { HttpServicesComponent } from './http-services/http-services.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpMiddleWareService } from './services/http-middle-ware.service';

@NgModule({
  declarations: [
    AppComponent,
    PipeSQRTPipe,
    PipeOutputSQRTPipe,
    SwitchCaseHappyComponent,
    SwitchCaseSadComponent,
    SwitchCaseAngryComponent,
    SwitchCaseDefaultComponent,
    MyReverseIfDirective,
    MyAtrributeDirectiveDirective,
    HttpServicesComponent
  ],
  imports: [
    FormModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpMiddleWareService,multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

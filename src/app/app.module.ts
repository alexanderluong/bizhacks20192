import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Shared Service */
import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { ScreenComponent } from './screen/screen.component';
import { StorageComponent } from './storage/storage.component';
import { BatteryComponent } from './battery/battery.component';
import { DataService } from './data.service';
import { EmailComponent } from './email/email.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule
    ],
    providers: [{ provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [AppComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent, ScreenComponent, StorageComponent, BatteryComponent, EmailComponent, CustomerserviceComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
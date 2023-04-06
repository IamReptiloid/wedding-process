import {TuiRootModule, TuiAlertModule, TuiDialogModule} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {BACKEND_TOKEN} from "../../backend/interface/IBackend";
import {BackendService} from "../../backend/service/backend.service";
import {BackenMockService} from "../../backend/service/backen.mock.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiAlertModule,
        TuiDialogModule,
        HttpClientModule
    ],
    providers: [
        // {
        //     provide: BACKEND_TOKEN,
        //     useClass: BackendService
        // },
        {
            provide: BACKEND_TOKEN,
            useClass: BackenMockService
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

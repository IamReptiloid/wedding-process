import {NgModule} from '@angular/core';
import {QuestionnaireStartComponent} from "./questionnaire-start.component";
import {CommonModule} from "@angular/common";
import {QuestionnaireRoutingModule} from "../questionnaire-routing.module";
import {TuiNotificationModule} from "@taiga-ui/core";

@NgModule({
    declarations: [
        QuestionnaireStartComponent
    ],
    imports: [
        CommonModule,
        QuestionnaireRoutingModule,
        TuiNotificationModule
    ],
    providers: [],
})
export class QuestionnaireStartModule {
}

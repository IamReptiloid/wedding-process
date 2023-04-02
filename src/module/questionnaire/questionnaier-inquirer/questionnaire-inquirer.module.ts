import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {QuestionnaireInquirerComponent} from "./questionnaire-inquirer.component";
import {TuiFieldErrorPipeModule, TuiInputModule, TuiRadioBlockModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QuestionnaireInquirerRoutingModule} from "./questionnaire-inquirer-routing.module";
import {TuiButtonModule, TuiErrorModule, TuiGroupModule, TuiLinkModule, TuiTooltipModule} from "@taiga-ui/core";

@NgModule({
    declarations: [
        QuestionnaireInquirerComponent
    ],
    imports: [
        CommonModule,
        TuiInputModule,
        FormsModule,
        ReactiveFormsModule,
        QuestionnaireInquirerRoutingModule,
        TuiGroupModule,
        TuiRadioBlockModule,
        TuiButtonModule,
        TuiTooltipModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiLinkModule,
    ],
    providers: [],
    exports: [QuestionnaireInquirerComponent]
})
export class QuestionnaireInquirerModule {
}

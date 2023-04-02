import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionnaireInquirerComponent} from "./questionnaire-inquirer.component";

const routes: Routes = [
    {
        path: ':id',
        component: QuestionnaireInquirerComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionnaireInquirerRoutingModule {
}

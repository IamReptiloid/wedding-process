import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionnaireStartComponent} from "./questionnaire-start/questionnaire-start.component";
import {QuestionnaireInquirerComponent} from "./questionnaier-inquirer/questionnaire-inquirer.component";

const routes: Routes = [
    {
        path: ':id',
        component: QuestionnaireStartComponent
    },
    {
        // path: 'c/:id',
        // component: QuestionnaireInquirerComponent
        path: 'inquirer',
        loadChildren: () => import('./questionnaier-inquirer/questionnaire-inquirer.module').then(m => m.QuestionnaireInquirerModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionnaireRoutingModule {
}

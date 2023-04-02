import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'questionnaire',
        loadChildren: () => import('../questionnaire/questionnaire-start/questionnaire-start.module').then(m => m.QuestionnaireStartModule)
    },
    {
        path: 'success',
        loadChildren: () => import('../../shared/module/success/success.module').then(m => m.SuccessModule)
    },
    {
        path: 'viewing-data',
        loadChildren: () => import('../viewing-data/viewing-data.module').then(m => m.ViewingDataModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

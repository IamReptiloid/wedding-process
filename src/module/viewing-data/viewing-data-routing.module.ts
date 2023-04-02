import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewingDataComponent} from "./viewing-data.component";

const routes: Routes = [
    {
        path: '',
        component: ViewingDataComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewingDataRoutingModule {}

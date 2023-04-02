import {NgModule} from "@angular/core";
import {SuccessComponent} from "./success.component";
import {TuiMarkerIconModule} from "@taiga-ui/kit";
import {SuccessRoutingModule} from "./success-routing.module";

@NgModule({
    imports: [
        TuiMarkerIconModule,
        SuccessRoutingModule
    ],
    declarations: [SuccessComponent]
})
export class SuccessModule{}

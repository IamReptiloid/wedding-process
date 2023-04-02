import {NgModule} from "@angular/core";
import {ViewingDataComponent} from "./viewing-data.component";
import {ViewingDataRoutingModule} from "./viewing-data-routing.module";
import {CommonModule} from "@angular/common";
import {TuiButtonModule, TuiDialogModule} from "@taiga-ui/core";
import {TuiInputModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";
import {TableDataService} from "./table-data.service";

@NgModule({
    declarations: [ViewingDataComponent],
    imports: [ViewingDataRoutingModule, CommonModule, TuiButtonModule, TuiInputModule, ReactiveFormsModule, TuiDialogModule],
    providers: [TableDataService]
})
export class ViewingDataModule {}

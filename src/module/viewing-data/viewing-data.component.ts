import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TuiAlertService, TuiNotification} from "@taiga-ui/core";
import {TableDataService} from "./table-data.service";

@Component({
    selector: 'app-viewing-data',
    templateUrl: './viewing-data.component.html',
    styleUrls: ['./viewing-data.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingDataComponent implements OnInit{
    readonly data$ = this.tableDataService.getData()

    constructor(
        private readonly tableDataService: TableDataService,
        private readonly alertService: TuiAlertService
    ) {
    }

    ngOnInit(): void {
        this.tableDataService.setAllDataTable()
    }

    exampleForm = new FormGroup({
        exampleControl: new FormControl(''),
    });

    open = false;

    showDialog(): void {
        this.open = true;
    }

    write(id: number) {
        const textArea = document.createElement("textarea");
        textArea.value = `http://wedding-of-kiril-and-natalia.ru/questionnaire/${id}`;

        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";

        document.body.prepend(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (error) {
            console.error(error);
        } finally {
            textArea.remove();
        }
        this.alertService.open(
            '',
            {label: 'Ссылка скопирована', status:TuiNotification.Info}
        ).subscribe()
    }

    create() {
        if(this.exampleForm.controls['exampleControl'].value && this.exampleForm.controls['exampleControl'].value.length !== 0) {
            this.tableDataService.create(this.exampleForm.controls['exampleControl'].value)
            this.exampleForm.controls['exampleControl'].setValue('')
        }
    }
}

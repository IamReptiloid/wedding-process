import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {tuiMarkControlAsTouchedAndValidate} from "@taiga-ui/cdk";
import {TuiAlertService, TuiNotification} from "@taiga-ui/core";
import {ActivatedRoute, Router} from "@angular/router";
import {TUI_VALIDATION_ERRORS} from "@taiga-ui/kit";
import {BackendService} from "../../../backend/service/backend.service";
import {BACKEND_TOKEN, IBackend} from "../../../backend/interface/IBackend";

@Component({
    selector: 'app-questionnaire-inquirer',
    templateUrl: './questionnaire-inquirer.component.html',
    styleUrls: ['./questionnaire-inquirer.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: 'Это поле обязательно!',
            },
        },
    ],
})
export class QuestionnaireInquirerComponent implements OnInit {
    readonly isSatellites = new FormControl('', Validators.required)
    readonly form = new FormGroup({
        present: new FormControl(0, Validators.required),
        transfer: new FormControl('', Validators.required),
        satellites: new FormArray([new FormControl('', Validators.required)])
    })
    readonly userInfo$ = this.backendService.getUserInfo(this.route.snapshot.params['id'])

    constructor(
        @Inject(TuiAlertService) private readonly alertService: TuiAlertService,
        private route: ActivatedRoute,
        @Inject(BACKEND_TOKEN)
        private readonly backendService: IBackend,
        private routers: Router
    ) {}

    ngOnInit(): void {
        this.isSatellites.valueChanges.subscribe(data => {
            if (data === 'single') {
                this.form.controls['satellites'].disable()
            } else {
                this.form.controls['satellites'].enable()
            }
        })
    }

    add() {
        this.form.controls["satellites"].push(new FormControl('', Validators.required))
    }

    delete() {
        if (this.form.controls["satellites"].length > 1) {
            this.form.controls["satellites"].removeAt(this.form.controls["satellites"].length - 1)
        }
    }

    getFormsControls(): FormArray {
        return this.form.controls['satellites'] as FormArray;
    }

    send() {
        if (this.form.invalid || this.isSatellites.invalid) {
            tuiMarkControlAsTouchedAndValidate(this.isSatellites)
            tuiMarkControlAsTouchedAndValidate(this.form)
            this.alertService.open(
                '',
                {label: 'Заполните все поля', status:TuiNotification.Error}
            ).subscribe()
        } else {
            const satellitesNames = this.form.controls['satellites'].controls.map(satellite => {
                return satellite.value
            })
            this.backendService.save({
                isCome: true,
                id: Number(this.route.snapshot.params['id']),
                alcohol: [''],
                transport: this.form.controls['transfer'].value as string,
                presents: this.form.controls['present'].value as number,
                satellites: satellitesNames[0] === null? [] : satellitesNames as string[]

            })
            this.routers.navigate(["/success"])
        }
    }
}

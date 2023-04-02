import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {interval, map} from "rxjs";
import {TuiAlertService, TuiNotification} from "@taiga-ui/core";
import {ActivatedRoute} from "@angular/router";
import {BackendService} from "../../../backend/service/backend.service";

@Component({
    selector: 'app-questionnaire',
    templateUrl: './questionnaire-start.component.html',
    styleUrls: ['./questionnaire-start.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnaireStartComponent {
    private readonly dateStart = new Date(2023, 7, 21, 0)
    readonly dateCountdown$ = interval().pipe(
        map(_ => {
            const date = new Date();
            return {
                m: this.dateStart.getMonth() - date.getMonth(),
                d: (this.dateStart.getHours() - date.getHours()) > 0? this.dateStart.getDate() - date.getMonth() : this.dateStart.getDate() - date.getMonth() - 1,
                h: this.getHours(date),
                min: 60 - date.getMinutes(),
                s: 60 - date.getSeconds()
            }
        })
    )
    readonly userInfo$ = this.backendService.getUserInfo(Number(this.route.snapshot.params['id']))
    readonly id = Number(this.route.snapshot.params['id'])

    constructor(
        @Inject(TuiAlertService) private readonly alertService: TuiAlertService,
        private route: ActivatedRoute,
        private readonly backendService: BackendService
    ) {
    }

    cancel() {
        this.backendService.nocCum(this.id).subscribe()
        this.alertService.open(
            'Но вы еще можете изменить ответ',
            {label: 'Ваш ответ отправлен', status:TuiNotification.Success}
        ).subscribe()
    }

    private getHours(date: Date): number {
        if((this.dateStart.getHours() - date.getHours()) > 0) {
            return this.dateStart.getHours() - date.getHours()
        } else {
            return this.dateStart.getHours() - date.getHours() +  24
        }
    }
}

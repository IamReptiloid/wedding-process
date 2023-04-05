import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {interval, map} from "rxjs";
import {TuiAlertService, TuiNotification} from "@taiga-ui/core";
import {ActivatedRoute} from "@angular/router";
import {BackendService} from "../../../backend/service/backend.service";
import {BACKEND_TOKEN, IBackend} from "../../../backend/interface/IBackend";

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
            const oneDay = 1000 * 60 * 60 * 24
            const date = new Date();
            const diffInTime = this.dateStart.getTime() - date.getTime()
            const diffInDays = Math.round(diffInTime / oneDay);
            return {
                d: diffInDays,
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
        @Inject(BACKEND_TOKEN)
        private readonly backendService: IBackend
    ) {
    }

    cancel() {
        this.backendService.notCum(this.id).subscribe()
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

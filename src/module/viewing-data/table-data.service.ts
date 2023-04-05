import {BackendService} from "../../backend/service/backend.service";
import {Inject, Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Data} from "../../shared/interface/data";
import {BACKEND_TOKEN, IBackend} from "../../backend/interface/IBackend";

@Injectable()
export class TableDataService {
    private readonly dataTable$ = new BehaviorSubject<Data>({data: []})

    constructor(
        @Inject(BACKEND_TOKEN)
        private readonly backendService: IBackend
    ) {}

    getData(): Observable<any> {
        return this.dataTable$.asObservable()
    }

    setAllDataTable() {
        this.backendService.getData().subscribe(data => {
            this.dataTable$.next(data)
        })
    }

    create(name: string) {
        this.backendService.create(name).subscribe(newId => {
            this.dataTable$.next({
                data: [...this.dataTable$.value.data, {name, id: newId.id, isCome: null, satellites: null, alcohol: null, presents: null, transport: null}]
            })
        })
    }
}

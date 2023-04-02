import {BackendService} from "../../backend/service/backend.service";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Data} from "../../shared/interface/data";

@Injectable()
export class TableDataService {
    private readonly dataTable$ = new BehaviorSubject<Data>({data: []})

    constructor(private readonly backendService: BackendService) {
    }

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
                data: [...this.dataTable$.value.data, {name, id: newId.id, isCome: null, satellites: null, alcohol: null, present: null, transport: null}]
            })
        })
    }
}

import {Injectable} from "@angular/core";
import {IBackend} from "../interface/IBackend";
import {Observable, of} from "rxjs";
import {Data, User} from "src/shared/interface/data";
import { UserInfo } from "src/shared/interface/user-info";

@Injectable()
export class BackenMockService implements IBackend{
    create(name: string): Observable<User> {
        return of({id: 1});
    }

    getData(): Observable<Data> {
        return of({
            data: [{
                id: 1,
                name: 'string',
                isCome: null,
                present: null,
                satellites: null,
                alcohol: null,
                transport: null
            }]
        });
    }

    getUserInfo(id: number): Observable<UserInfo> {
        return of({
            name: 'string',
            id: 1,
            present: [
                {
                    id: 1,
                    file: '',
                    name: 'подарок1',
                    description: "sdf"
                },
                {
                    id: 2,
                    file: '',
                    name: 'подарок2',
                    description: "sdf"
                },
                {
                    id: 3,
                    file: '',
                    name: 'подарок3',
                    description: "sdf"
                }
            ]
        });
    }

    notCum(id: number): Observable<any> {
        return of('');
    }

    save(info: { presents: number[]; id: number; isCome: boolean; transport: string; satellites: string[]; alcohol: string[] }): void {
        console.log('save!!')
    }

}

import {Observable} from "rxjs";
import {Data, User} from "../../shared/interface/data";
import {UserInfo} from "../../shared/interface/user-info";
import {InjectionToken} from "@angular/core";

export const BACKEND_TOKEN = new InjectionToken("backend")

export interface IBackend {
    getData(): Observable<Data>
    getUserInfo(id: number): Observable<UserInfo>
    create(name: string): Observable<User>
    save(info: {presents: number, id: number, isCome: boolean, transport: string, satellites: string[], alcohol: string[]}): void
    notCum(id: number): Observable<any>
}

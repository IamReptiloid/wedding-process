import {Observable, of} from "rxjs";
import {Data, User} from "../../shared/interface/data";
import {UserInfo} from "../../shared/interface/user-info";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {IBackend} from "../interface/IBackend";

const BACK = 'http://wedding-of-kiril-and-natalia.ru:8080/questionnaire'

@Injectable({providedIn: 'root'})
export class BackendService implements IBackend{
    constructor(private readonly httpClient: HttpClient) {
    }

    getData(): Observable<Data> {
        return this.httpClient.get<Data>(`${BACK}/all`);
    }

    getUserInfo(id: number): Observable<UserInfo> {
        return this.httpClient.post<UserInfo>(`${BACK}/start`, {id})
    }

    create(name: string): Observable<User> {
        return this.httpClient.post<User>(`${BACK}/create`, {name})
    }

    save(info: {presents: number[], id: number, isCome: boolean, transport: string, satellites: string[], alcohol: string[]}) {
        this.httpClient.post(`${BACK}/save`, info).subscribe()
    }

    notCum(id: number): Observable<any> {
        return this.httpClient.post<any>(`${BACK}/notcum`, {id})
    }
}

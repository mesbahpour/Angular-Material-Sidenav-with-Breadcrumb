import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpclientService {

    constructor(private _httpClient: HttpClient) { }

    // HttpClient API get() method => Fetch details
    getList<T>(url: string) {
        return this._httpClient.get<T[]>(`${environment.API_URL}/${url}`)
    }


}

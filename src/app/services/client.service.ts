import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { global } from './global.service';


@Injectable()
export class ClientService {
    /**
     *
     */
    constructor(private http: HttpClient) { }

    getQuery(query: string) {
        const url = global.urlApiAdmin + `${query}`;
    }

    getClient(noDocumento:string){
        return this.getQuery(`Client/Client/${noDocumento}`);
        // .pipe(
        //     map(data => {
        //         return data['client'].items;
        //     })
        // );
    }


}
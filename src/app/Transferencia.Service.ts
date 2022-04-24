import { Transferencia } from './Transferencia';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { catchError, map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TransferenciaService {



    constructor(private http: HttpClient) { }


    readAll(): Observable<Transferencia[]> {
        return this.http.get<Transferencia[]>('http://localhost:8080/Banco/Transferencias/BuscarTodos').pipe(map((obj) => obj));
    }

    readByName(nome: string | undefined): Observable<Transferencia[]> {
        return this.http.get<Transferencia[]>('http://localhost:8080/Banco/Transferencias/BuscarPorNome?nome=' + nome).pipe(map((obj) => obj));
    }

    readByDate(data: string | undefined): Observable<Transferencia[]> {
        return this.http.get<Transferencia[]>('http://localhost:8080/Banco/Transferencias/BuscarPorData?data=' + data).pipe(map((obj) => obj));
    }

    readByDateOrName(data: string | undefined, nome: string | undefined): Observable<Transferencia[]> {
        return this.http.get<Transferencia[]>('http://localhost:8080/Banco/Transferencias/BuscarPorDataOuNome?data=' + data + '&nome=' + nome).pipe(map((obj) => obj));
    }


}
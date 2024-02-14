import { Injectable } from '@angular/core';
import { Observable, catchError, tap, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

import { Employee } from './employee';
import { AppService } from '../app.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Injectable({
  	providedIn: 'root'
})

export class EmployeeService {
    local: boolean = this.AppService.getIsLocal();
    private apiServerUrl = environment.apiUrlLocal;
    private serverUrl = environment.localBackendUrl;

	messages: string[] = [];

    constructor(
        private AppService: AppService,
        private http: HttpClient,
    ) { }

	getEmployees(): Observable<Employee[]> {

        /*  Wenn Backend / SQL Server (SonyVaio) vorhanden
                Dann Lade Daten über Backend / SQL Server (SonyVaio)
            Sonst
                Dann Lade Mockdaten
        */

        console.log(this.AppService.getLocalHost());
        console.log(this.AppService.getIsLocal());

        if(!this.AppService.getIsLocal()) {

            return this.http.get<Employee[]>(`${this.serverUrl}/employee/all`)
                .pipe(
                    // tap(_ => this.log('fetched heroes')),
                    catchError(
                        // this.handleError<Employee[]>('getEmployeesSql', []

                        error => {

                            console.error('Fehler beim Abrufen der Daten vom Backend. Lade Mockdaten.', error);
                            return of(this.AppService.getEmployees());

                        }
                    )
                );
        } else {
            return of(this.AppService.getEmployees());
        }
    }




	private log(message: string) {
		this.add('HeroService: ${message}');
        console.log("message" + this.messages);
	}

	add(message: string) {
		this.messages.push(message);
	}

	/**
     * Handle Http operation that failed.
     * Let the app continue.
     *
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {

        console.log(result);

        return (error: any): Observable<T> => {
            // send the error to remote logging infrastructure
            // console.error(error); // log to console instead

            // better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}

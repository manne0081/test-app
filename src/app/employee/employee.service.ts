import { Injectable } from '@angular/core';
import { Observable, catchError, tap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

import { Employee } from './employee';

@Injectable({
  	providedIn: 'root'
})

export class EmployeeService {

	local: boolean = true;
    private apiServerUrlLocal = environment.apiBaseUrlLocal;
    private apiServerUrl = environment.apiBaseUrl;

	messages: string[] = [];

    constructor(
        private http: HttpClient,
    ) { }

	getEmployeesSql(isLocalhost: boolean): Observable<Employee[]> {
        if(isLocalhost) {
            return this.http.get<Employee[]>(`${this.apiServerUrlLocal}/employee/all`)
                .pipe(
                    tap(_ => this.log('fetched heroes')),
                    catchError(this.handleError<Employee[]>('getEmployeesSql', []))
                );
        } else {
            return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`)
                .pipe(
                    tap(_ => this.log('fetched heroes')),
                    catchError(this.handleError<Employee[]>('getEmployeesSql', []))
                );
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
        return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        //this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
        };
    }

}

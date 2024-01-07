import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employee } from './test-thirds';
import { EMPLOYEES } from './test-thirds-mock';
import { environment } from 'src/environments/environments';

@Injectable({
    providedIn: 'root'
})

export class TestThirdService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(
        private http: HttpClient,
    ) { }

    // Get all employees from mySQL
    // ----------------------------
    public getAllEmployeesSql(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`)
            // .pipe(
            //     catchError(this.handleError<Employee[]>('getEmployees', []))
            // );
    }

    // Returns partners-array as observable
	// ------------------------------------
    getEmployees(): Observable<Employee[]> {
        const employees = of(EMPLOYEES);
        return employees;
    }    

    // Returns partner as observable
	// -----------------------------
    getEmployee(id: number): Observable<Employee> {
        const employee = EMPLOYEES.find(h => h.id === id)!;
        return of(employee);
    }
    
    // TEST - Filters all employees
    // ----------------------------
    public filterEmployees(filterCriteria: string): Observable<Employee[]> {
        const url = `${this.apiServerUrl}/employee/all/filter?filterCriteria=${filterCriteria}`;
        return this.http.get<Employee[]>(url);
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

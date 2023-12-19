import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Test for PHP-Backend
// ********************
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Employee } from './test-thirds';
import { EMPLOYEES } from './test-thirds-mock';

@Injectable({
    providedIn: 'root'
})

export class TestThirdService {
    private url = "http://localhost:3307/worktimebalance";

    constructor(
        private http: HttpClient
    ) { }

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
}

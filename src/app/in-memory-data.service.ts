import { Injectable } from '@angular/core';
import { Employee } from './test-third/test-thirds';


@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
    
    constructor() { }

	createDb() {
		const employees = [
			{ id: 0, name: 'Dr. Nice' },
			{ id: 1, name: 'Bombasto' },
			{ id: 2, name: 'Celeritas' },
			{ id: 3, name: 'Magneta' },
			{ id: 4, name: 'RubberMan' },
			{ id: 5, name: 'Dynama' },
			{ id: 6, name: 'Dr. IQ' },
			{ id: 7, name: 'Magma' },
			{ id: 8, name: 'Tornado' }
		];
		return {employees};
    }

	genId(employees: Employee[]): number {
		return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 11;
	}
}

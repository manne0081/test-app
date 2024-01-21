import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerComponent } from './partner/partner.component';
import { TestFirstComponent } from './test-first/test-first.component';
import { TestSecondComponent } from './test-second/test-second.component';
import { TestThirdComponent } from './test-third/test-third.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { PrivateComponent } from './private/private.component';

const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },

    { path: 'private', component: PrivateComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'employees', component: EmployeeListComponent },
            { path: 'clients', component: ClientListComponent },
        ]
    },

    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'partner', component: PartnerComponent },

    // { path: 'test', component: TestFirstComponent },
    // { path: 'test2', component: TestSecondComponent },
    // { path: 'test3', component: TestThirdComponent },
    // { path: 'employees', title: "Employee Overview", component: EmployeeListComponent },
    // { path: 'clients', title: "Client Overview", component: ClientListComponent },

    { path: '**', component: AppComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    // imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

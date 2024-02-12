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
import { TestFourthComponent } from './test-fourth/test-fourth.component';
import { TestContent1Component } from './test-content1/test-content1.component';
import { TaskListComponent } from './private/workspace/task-list/task-list.component';
import { CampagneListComponent } from './private/workspace/campagne-list/campagne-list.component';
import { CompanyListComponent } from './private/contact/company-list/company-list.component';
import { SupplierListComponent } from './private/contact/supplier-list/supplier-list.component';

const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },

    { path: 'private', component: PrivateComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'task', component: TaskListComponent },
            { path: 'campagne', component: CampagneListComponent },
            { path: 'company', component: CompanyListComponent },
            { path: 'supplier', component: SupplierListComponent },


        ]
    },

    // RELAXX - Navigation
    // *******************
    // { path: 'dashboard', component: TestFourthComponent },              // Dashboard
    // { path: 'workspace', component: TestFourthComponent },              // Workspace
    // { path: 'contacts', component: TestFourthComponent },               // Kontakte
    // { path: 'operations', component: TestFourthComponent },             // Vorgänge & Belege
    // { path: 'orderProcessing', component: TestFourthComponent },        // Auftragsabwicklung
    // { path: 'accounting', component: TestFourthComponent },             // Rechnungswesen
    // { path: 'productManagement', component: TestFourthComponent },      //Produktverwaltung
    // { path: 'contracting', component: TestFourthComponent },            //Vertragswesen
    // { path: 'toolsAssets', component: TestFourthComponent },            //Tools & Assets//Statistik & Reporting
    // { path: 'statisticsReporting', component: TestFourthComponent },    //Statistik & Reporting
    // *******************

    { path: 'partner', component: PartnerComponent },
    { path: 'test3', component: TestThirdComponent },
    { path: 'test4', component: TestFourthComponent },
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

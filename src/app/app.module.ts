import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestFirstComponent } from './test-first/test-first.component';
import { HomeComponent } from './home/home.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { PartnerComponent } from './partner/partner.component';
import { TestSecondComponent } from './test-second/test-second.component';
import { TestThirdComponent } from './test-third/test-third.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { PrivateComponent } from './private/private.component';
import { TestFourthComponent } from './test-fourth/test-fourth.component';
import { TestContent1Component } from './test-content1/test-content1.component';
import { TaskListComponent } from './private/workspace/task-list/task-list.component';
import { CampagneListComponent } from './private/workspace/campagne-list/campagne-list.component';
import { CompanyListComponent } from './private/contact/company-list/company-list.component';
import { SupplierListComponent } from './private/contact/supplier-list/supplier-list.component';
import { InvoiceListComponent } from './private/operations/invoice-list/invoice-list.component';
import { OrderListComponent } from './private/operations/order-list/order-list.component';

@NgModule({
    declarations: [
        AppComponent,
        TestFirstComponent,
        HomeComponent,
        PageHeaderComponent,
        LoginComponent,
        DashboardComponent,
        QuicklinksComponent,
        MainNavigationComponent,
        PartnerComponent,
        TestSecondComponent,
        TestThirdComponent,
        EmployeeListComponent,
        EmployeeDetailComponent,
        MainMenuComponent,
        ClientListComponent,
        ClientDetailComponent,
        PrivateComponent,
        TestFourthComponent,
        TestContent1Component,
        TaskListComponent,
        CampagneListComponent,
        CompanyListComponent,
        SupplierListComponent,
        InvoiceListComponent,
        OrderListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        DragDropModule,
    ],
    providers: [
        CookieService,
    ],
    bootstrap: [
        AppComponent,
    ]
})

export class AppModule { }

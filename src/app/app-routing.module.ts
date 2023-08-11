import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestFirstComponent } from './test-first/test-first.component';

const routes: Routes = [
    { path: '',   redirectTo: 'test-first', pathMatch: 'full' },
    { path: 'test-first', component: TestFirstComponent },
    { path: '**', component: AppComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }

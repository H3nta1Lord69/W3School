import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { FirstGraphicComponent } from './first-graphic/first-graphic.component';

const routes: Routes = [
    
    { 
        path: '', 
        component: PagesComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent},
          { path: 'progress', component: ProgressComponent},
          { path: 'first_graphic', component: FirstGraphicComponent},
          { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

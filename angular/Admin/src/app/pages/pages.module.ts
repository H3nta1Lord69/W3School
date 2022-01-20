// Angular Importations
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Other libraries
import { NgChartsModule } from 'ng2-charts';

// Modules
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { FirstGraphicComponent } from './first-graphic/first-graphic.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    FirstGraphicComponent,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    FirstGraphicComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
  ],
})
export class PagesModule {}

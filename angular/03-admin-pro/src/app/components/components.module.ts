// Angular Importations
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Other libraries
import { NgChartsModule } from 'ng2-charts';

// Components
import { IncreaserComponent } from './increaser/increaser.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

@NgModule({
  declarations: [IncreaserComponent, DoughnutComponent],
  exports: [IncreaserComponent, DoughnutComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}

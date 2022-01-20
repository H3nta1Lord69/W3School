// Angular Importations
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { IncreaserComponent } from './increaser/increaser.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

@NgModule({
  declarations: [IncreaserComponent, DoughnutComponent],
  exports: [IncreaserComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsModule {}

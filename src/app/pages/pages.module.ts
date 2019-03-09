import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PopulationCalculatorComponent} from "./population-calculator/population-calculator.component";
import {PopulationChartComponent} from "./population-chart/population-chart.component";
import {PopulationTableComponent} from "./pupulation-table/population-table.component";
import {SharedService} from "../shared/shared.service";

//Materials Components
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from "@angular/forms";
import {
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule
} from "@angular/material";
import {CalculatorService} from "./population-calculator/services/calculator.service";


const MATERIAL_MODULES = [
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    PopulationCalculatorComponent,
    PopulationChartComponent,
    PopulationTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    SharedService,
    CalculatorService
  ]
})
export class PagesModule { }

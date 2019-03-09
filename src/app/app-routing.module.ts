import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopulationCalculatorComponent} from "./pages/population-calculator/population-calculator.component";
import {PopulationTableComponent} from "./pages/pupulation-table/population-table.component";
import {PopulationChartComponent} from "./pages/population-chart/population-chart.component";

const routes: Routes = [
  {path: 'chart',component: PopulationChartComponent},
  {path: 'population',component: PopulationTableComponent},
  {path: 'calculator',component: PopulationCalculatorComponent},
  {path: '', pathMatch: 'full', redirectTo: 'population'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

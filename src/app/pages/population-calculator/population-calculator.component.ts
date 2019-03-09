import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CalculatorService} from "./services/calculator.service";
import {RemainingInfoType} from "./types/population.types";
import {SEX_SELECT} from "./constants/population.constants";

@Component({
  selector: 'app-population-calculator',
  templateUrl: './population-calculator.component.html',
  styleUrls: ['./population-calculator.component.scss']
})
export class PopulationCalculatorComponent implements OnInit {

  private form: FormGroup;
  private remainingData: RemainingInfoType;
  private countriesList: Array<string> = [];
  private sexSelect = SEX_SELECT;
  private lastQueries: Array<RemainingInfoType> = [];

  constructor(private fb: FormBuilder,
              private calculatorService: CalculatorService) {
  }

  ngOnInit() {
    const queries = window.localStorage.getItem('lastQueries');
    if (queries) {
      this.lastQueries = JSON.parse(queries);
    }
    this.initForm();
    this.getCountries();
  }

  private initForm() {
    this.form = this.fb.group({
      sex: [''],
      country: [''],
      date: [''],
      age: ['']
    });
  }

  private getInfo() {
    this.calculatorService.calculateExpectancy(this.form.value)
      .subscribe((data: RemainingInfoType) => {
        this.remainingData = data;
        if (this.lastQueries.length === 5) {
          this.lastQueries.splice(4, 1);
          this.lastQueries.unshift(data);
        } else {
          this.lastQueries.push(data);
        }
        window.localStorage.setItem('lastQueries', JSON.stringify(this.lastQueries));
      });
  }

  private getCountries() {
    this.calculatorService.getCountries().subscribe((countries) => {
      this.countriesList = countries.countries;
    });
  }
}

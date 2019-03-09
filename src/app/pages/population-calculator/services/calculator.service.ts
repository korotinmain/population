import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CalculationParams, RemainingInfoType} from "../types/population.types";
import {map} from "rxjs/operators";

@Injectable()
export class CalculatorService {

  constructor(private http: HttpClient) { }

  public calculateExpectancy(params: CalculationParams): Observable<any>{
    const query = `http://api.population.io:80/1.0/life-expectancy/remaining/${params.sex}/${params.country}/${params.date}/${params.age}/`;
    return this.http.get(query)
      .pipe(map((value: RemainingInfoType) => {
        value.remaining_life_expectancy = Math.round(value.remaining_life_expectancy);
        return value;
      }))
  }

  public getCountries(): Observable<any> {
    return this.http.get(`http://api.population.io:80/1.0/countries`);
  }

}

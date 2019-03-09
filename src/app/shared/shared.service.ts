import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PopulationDataType} from "./shared.types";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable()
export class SharedService {
  public populationInfoSubject$: Subject<PopulationDataType> = new Subject<PopulationDataType>();
  public populationInfoSubject = this.populationInfoSubject$.asObservable();
  constructor(private http: HttpClient) {}

  public getPopulationData(): void{
    for (let iterator = 18; iterator <= 30; iterator++) {
      this.http.get(`http://api.population.io:80/1.0/population/1980/Slovak Republic/${iterator}/`)
        .pipe(map(value => value))
        .subscribe((response: Array<PopulationDataType>) => {
          response.map(data => {
            this.populationInfoSubject$.next(data);
          });
        })
    }
  }
}

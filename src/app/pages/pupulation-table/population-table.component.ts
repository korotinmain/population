import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from "../../shared/shared.service";
import {PopulationDataType} from "../../shared/shared.types";
import {Subscription} from "rxjs";
import {VISIBLE_COLUMNS} from "./constants/population-table.constants";

@Component({
  selector: 'app-population-table',
  templateUrl: './population-table.component.html',
  styleUrls: ['./population-table.component.scss']
})
export class PopulationTableComponent implements OnInit, OnDestroy {
  dataSource: Array<PopulationDataType> = [];
  subscription: Subscription;
  displayedColumns: string[] = VISIBLE_COLUMNS;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit() {
    this.sharedService.getPopulationData();
    this.subscription = this.sharedService.populationInfoSubject
      .subscribe(data => {
        this.dataSource.push(data);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IReport } from './ireport';

@Injectable({
  providedIn: 'root'
})

export class ReportService {

  private reports: IReport[] = [
    {
      id: 1
    },
    {
      id: 2
    }
  ];

  public reports$: BehaviorSubject<IReport[]>;

  constructor() {
    this.reports$ = new BehaviorSubject<IReport[]>(this.reports);
  }

  deleteReport(reportId: number): void {
    const index = this.reports.findIndex((x) => x.id === reportId);
    if (index > -1) {
      this.reports.splice(index, 1);
      this.reports$.next(this.reports);
    }
  }

  addReport(): void {
    const id = this.reports.length === 0 ? 1 :
      Math.max.apply(Math, this.reports.map((report) => {
        return report.id;
      })) + 1;
    this.reports.push({
      id
    });
    console.log(this.reports)
    this.reports$.next(this.reports);
  }
}
import { Component, Input, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Input() reportId!: number;
  isDone!: boolean;
  confirmed!: boolean;
  report!: string;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.report = 'Nouveau rapport'
    this.confirmed = false;
  }

  switchIsDone(): void {
    this.isDone = !this.isDone;
    if (this.isDone && !this.confirmed) {
      this.switchConfirm();
    }
  }

  switchConfirm(): void {
    this.confirmed = !this.confirmed;
  }

  orderBottles(bottleCount: number): void {
    console.log(`Alert quantity : ${bottleCount}`)
  }

  deleteReport(): void {
    this.reportService.deleteReport(this.reportId);
  }

}

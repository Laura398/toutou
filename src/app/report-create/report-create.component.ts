import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.scss']
})
export class ReportCreateComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }

  addReport(): void {
    console.log("adding")
    this.reportService.addReport();
  }

}

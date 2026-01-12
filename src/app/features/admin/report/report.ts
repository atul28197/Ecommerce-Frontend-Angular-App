import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { AdminReport } from '../../../core/services/admin/report';

@Component({
  selector: 'app-report',
  imports: [JsonPipe],
  templateUrl: './report.html',
  styleUrl: './report.scss',
})
export class Report {
data: any;
 constructor(private adminReport: AdminReport) {}
ngOnInit() {
  this.adminReport.get().subscribe(res => this.data = res);
}
}

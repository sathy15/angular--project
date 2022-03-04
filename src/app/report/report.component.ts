// import { Component, OnInit } from '@angular/core';
// import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// import { Label } from 'ng2-charts';

// @Component({
//   selector: 'app-report',
//   templateUrl: './report.component.html',
//   styleUrls: ['./report.component.scss'],
// })
// export class ReportComponent implements OnInit {
//   constructor() {}

//   ngOnInit() {}

//   public barChartOptions = {
//     scaleShowVerticalLines: false,
//     responsive: true,
//   };
//   public barChartLabels = [
//     'Gowtham',
//     'Vishnu',
//     'Sathya',
//     'Renu',
//     'Gayathri',
//     'Karthi',
//     'Nagarjun',
//   ];
//   public barChartType = 'bar';
//   public barChartLegend = true;
//   public barChartData = [
//     { data: [75, 49, 89, 31, 86, 35, 50], label: 'In Progress' },
//     { data: [48, 38, 65, 39, 66, 17, 80], label: 'Completed' },
//   ];
// }

import { Component, OnInit } from '@angular/core';
// import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
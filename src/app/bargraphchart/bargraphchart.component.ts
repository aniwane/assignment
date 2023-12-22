import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bargraphchart',
  templateUrl: './bargraphchart.component.html',
  styleUrls: ['./bargraphchart.component.css']
})
export class BargraphchartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '',
      align: 'left',
    },
    subtitle: {
      text: '',
      align: 'left',
    },
    xAxis: {
      categories: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'],
      crosshair: true,
      accessibility: {
        description: 'Countries',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
    },
    tooltip: {
      valueSuffix: ' (1000kWh)',
    },
    credits: {
      enabled: false
  },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        type: 'column',
        name: 'Energy',
        data: [406292, 360000, 207000, 683008, 275050, 145600],
      }
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }
}

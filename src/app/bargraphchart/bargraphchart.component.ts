import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';

@Component({
  selector: 'app-bargraphchart',
  templateUrl: './bargraphchart.component.html',
  styleUrls: ['./bargraphchart.component.css'],
})
export class BargraphchartComponent implements OnInit {
  next7Days: moment.Moment[] = [];
  lineXaxisCat: any[] = [];
  charOptions: any;
  generateNext7Days(): void {
    const today = moment();

    for (let i = 0; i < 7; i++) {
      this.next7Days.push(today.clone().add(i, 'days'));
    }
  }
  Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {
  //   chart: {
  //     type: 'column',
  //   },
  //   title: {
  //     text: '',
  //     align: 'left',
  //   },
  //   subtitle: {
  //     text: '',
  //     align: 'left',
  //   },
  //   xAxis: {
  //     categories: this.lineXaxisCat.map(category => {
  //       const parts = category.split(' ');
  //       return parts[0] + '<br>' + parts.slice(1).join(' ');
  //   }),
  //     crosshair: true,
  //     accessibility: {
  //       description: 'Countries',
  //     },
  //   },
  //   yAxis: {
  //     min: 0,
  //     title: {
  //       text: '',
  //     },
  //   },
  //   tooltip: {
  //     valueSuffix: ' (1000kWh)',
  //   },
  //   credits: {
  //     enabled: false
  // },
  //   plotOptions: {
  //     column: {
  //       pointPadding: 0.2,
  //       borderWidth: 0,
  //     },
  //   },
  //   series: [
  //     {
  //       type: 'column',
  //       name: 'Energy',
  //       data: [406292, 360000, 207000, 683008, 275050, 145600],
  //     }
  //   ],
  // };
  constructor() {
    this.generateNext7Days();
  }

  ngOnInit(): void {
    this.next7Days.forEach((day) => {
      let days = day.format('ddd MMM D');

      this.lineXaxisCat.push(days);
    });
    console.warn(this.lineXaxisCat);
    if (this.lineXaxisCat) {
      this.createmethodchart();
    }
  }

  createmethodchart() {
    // chartOptions: Highcharts.Options = {
    this.charOptions = {
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
        categories: this.lineXaxisCat.map((category) => {
          const parts = category.split(' ');
          return parts[0] + '<br>' + parts.slice(1).join(' ');
        }),
        crosshair: true,
        accessibility: {
          description: 'Countries',
        },
        labels: {
          style: {
            fontSize: '7px', // Adjust the font size as needed
          },
        },
      },
      yAxis: {
        min: 0,
        title: {
          text: '',
        },
        labels: {
          style: {
            fontSize: '10px', // Adjust the font size as needed
          },
          formatter: function (this: { value: number }) {
            const roundedValue = Math.round(this.value / 20) * 20;
            return roundedValue + 'kwh';
          },
        },
      },
      tooltip: {
        valueSuffix: 'kwh',
      },
      credits: {
        enabled: false,
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
          data: [40, 36, 20, 68, 27, 14],
        },
      ],
    };
  }
}

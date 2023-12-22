import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-usagehistory',
  templateUrl: './usagehistory.component.html',
  styleUrls: ['./usagehistory.component.css']
})
export class UsagehistoryComponent implements OnInit {
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
      categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
      crosshair: true,
      accessibility: {
        description: 'Solar',
      },
    labels: {
      style: {
        color: 'grey',
        fontWeight: 'bold', // Set the font weight to bold
        fontSize: '12px', // Set the font size to 14 pixels (adjust as needed)
        // Add other style properties as needed
      },
    }
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
      labels: {
        formatter: function () {
          return (this as any).value / 500000000 + ' kWh'; // Divide the values by 1000 and add ' kWh' 
        },
        style: {
          color: 'grey',
          fontWeight: 'bold', // Set the font weight to bold
          fontSize: '12px', // Set the font size to 14 pixels (adjust as needed)
          // Add other style properties as needed
        },
      },
    } as Highcharts.YAxisOptions,
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
        name: 'production',
        data: [90629217543, 80629217543, 90629217543, 90629217543, 50629217543, 40629217543,60629217543,30629217543,40629217543,60629217543,70629217543,50629217543],
      },
      {
        type: 'column',
        name: 'Home Usage',
        data: [70629217543, 60629217543, 50629217543, 60629266543, 8062921753, 5062921774,39629217543,5862921754,40629217543,50629217543,40629217543,40629217543],
      },
      {
        type: 'column',
        name: 'Export to grid',
        data: [60641237811, 11600646460, 9500777777, 11600644352, 11600646460, 11600644352,11600646460,11600644777,11600646460,11600644352,27649765744,11600644352],
      }
    ],
  };
  constructor() { }

  ngOnInit(): void {
  }

}

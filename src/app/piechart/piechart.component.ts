import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

import HPie from 'highcharts/modules/variable-pie';

HPie(Highcharts);
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  name = 'Angular';

  // Chartstuff
  Highcharts = Highcharts;
  chart!: Highcharts.Chart;
  chartOptions: any;

  constructor() { }

  percentageList: { name: string; percentage: number }[] = [];
  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'pie',
      },
      accessibility: {
        description: 'A variable radius pie chart',
      },
      title: {
        text: '<p style="color:white">.</p>',
      },
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
          'Area (square km): <b>{point.y}</b><br/>' +
          'Solar Use (people per square km): <b>{point.z}</b><br/>',
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false,
          },
          colors: [
            '#50B432',
            '#ED561B',
            '#DDDF00',
            '#24CBE5',
            '#64E572',
            '#FF9655',
            '#FFF263',
            '#6AF9C4'
          ],

        },
      },
      series: [
        {
          minPointSize: 10,
          innerSize: '60%',
          zMin: 0,
          name: 'countries',
          data: [
            {
              name: 'From Solar',
              y: 351340,
              z: 201.8,
              colors: [
                '#50B432',
                '#ED561B',
                '#DDDF00',
                '#24CBE5',
                '#64E572',
                '#FF9655',
                '#FFF263',
                '#6AF9C4'
              ]
            },
            {
              name: 'From Battery',
              y: 311277,
              z: 214.5,
            },
            {
              name: 'From Grid',
              y: 37022,
              z: 235.6,
            },
          ],
        },
      ],
      legend: {
        enabled: true,
        labelFormatter: function () {
          const point = this as Highcharts.PointOptionsObject;
          const imageSrc = point.marker?.symbol || '';

          return `<div style="display: flex; align-items: center;">
                    <img src="${imageSrc}" style="width: 20px; height: 20px; margin-right: 5px;" />
                    <div>${point.name}</div>
                  </div>
                  <span style="color: ${point.color}">${point.y}%</span>`;
        },

      }
    };
  }
}
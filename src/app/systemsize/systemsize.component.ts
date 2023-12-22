import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

import HPie from 'highcharts/modules/variable-pie';

HPie(Highcharts);
@Component({
  selector: 'app-systemsize',
  templateUrl: './systemsize.component.html',
  styleUrls: ['./systemsize.component.css']
})
export class SystemsizeComponent implements OnInit {

  name = 'Angular';

  // Chartstuff
  Highcharts = Highcharts;
  chart!: Highcharts.Chart;
  chartOptions:any;

  constructor() {}

  percentageList: { name: string; percentage: number }[] = [];
  ngOnInit() {
    this.chartOptions = {
      chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            
        },
        title: {
            text: '<span style="color:green; font-weight: bold;">8.28kw</span><br><span style="font-weight:bold;color:grey; font-size:14px;margin-bottom:10px;">Real Time Power</span>',
            align: 'center',
            verticalAlign: 'middle',
            y: 60
        },
        
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
          enabled: false
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Power share',
            innerSize: '60%',
            data: [
                ['',73.86],
                ['',11.97]
                
            ]
        }]
    }
    
  
  }
}

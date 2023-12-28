import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css'],
})
export class HighchartComponent implements OnInit {
  data: any;
  solar:any;
  invertor:any;
  battery:any;
  home:any;
  grid:any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/real-time-status-widget-sample-data.json').subscribe((response) => {
      this.data = response;
      console.log(this.data);
      const inverterNode = this.data.nodes.find((node: any) => node.id === 'inverter');
      this.invertor =  inverterNode;

      const solarNode = this.data.nodes.find((node: any) => node.id === 'panel');
      this.solar =  solarNode;

      const batteryNode = this.data.nodes.find((node: any) => node.id === 'battery');
      this.battery =  batteryNode;

      const homeNode = this.data.nodes.find((node: any) => node.id === 'home');
      this.home =  homeNode;

      const gridNode = this.data.nodes.find((node: any) => node.id === 'grid');
      this.grid =  gridNode;


    });
  }
}

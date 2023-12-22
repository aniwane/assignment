import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-dash-udnav',
  templateUrl: './dash-udnav.component.html',
  styleUrls: ['./dash-udnav.component.css']
})
export class DashUdnavComponent implements OnInit {
  popupVisible = false;
  WeathertMessage:any;
  constructor(private weather:DemoserviceService) { }
  temperature: any;
  ngOnInit(): void {
    this.weather.popupVisible$.subscribe((visible) => {
      this.popupVisible = visible;
    });
   
    this.weather.weatherforcast().subscribe((data) => {
      this.WeathertMessage=data;
      this.temperature = this.WeathertMessage.main.temp;
    });

  }
  togglePopup() {
    if (this.popupVisible) {
      this.weather.hidePopup();
    } else {
      this.weather.showPopup();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dash-udnav',
  templateUrl: './dash-udnav.component.html',
  styleUrls: ['./dash-udnav.component.css']
})
export class DashUdnavComponent implements OnInit {
  popupVisible = false;
  WeathertMessage:any;
  remainingHours:any;
  remainingMinutes:any;
  sunriseTime: any;
  sunsetTime: any;
  constructor(private weather:DemoserviceService,private datePipe: DatePipe) { }
  temperature: any;
  ngOnInit(): void {
    this.weather.popupVisible$.subscribe((visible) => {
      this.popupVisible = visible;
    });
   
    this.weather.weatherforcast().subscribe((data) => {
      this.WeathertMessage=data;
      this.temperature = this.WeathertMessage.main.temp;
      const sunriseTimestamp = this.WeathertMessage.sys.sunrise;
      const sunsetTimestamp = this.WeathertMessage.sys.sunset;


      this.sunriseTime = this.formatTimestamp(sunriseTimestamp);
      this.sunsetTime = this.formatTimestamp(sunsetTimestamp);
      const remainingTimeUntilSunrise = sunriseTimestamp - Math.floor(Date.now() / 1000);
      const remainingHoursUntilSunrise = Math.floor(remainingTimeUntilSunrise / 3600);
      const remainingMinutesUntilSunrise = Math.floor((remainingTimeUntilSunrise % 3600) / 60);
      
      this.remainingHours = remainingHoursUntilSunrise;
      this.remainingMinutes = remainingMinutesUntilSunrise;
    });

  }

  formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Convert UNIX timestamp to milliseconds
    return this.datePipe.transform(date, 'shortTime', 'IST') || '';
  }
  togglePopup() {
    if (this.popupVisible) {
      this.weather.hidePopup();
    } else {
      this.weather.showPopup();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  WeathertMessage: any;
  name: any;
  description: any;
  currentDate!: string
  currentTime!: string
  sunriseTime: any;
  sunsetTime: any;
  popupVisible!: boolean;
  temperature: any;
  tempMax:any;
  tempMin:any;


  constructor(private weather: DemoserviceService, private datePipe: DatePipe) {
    const currentDateTime = new Date();
    this.currentDate = this.formatDate(currentDateTime);
    this.currentTime = this.formatTime(currentDateTime);
  }
  // private formatDate(date: Date): string {
  //   const year = date.getFullYear();
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0');
  //   const day = date.getDate().toString().padStart(2, '0');
  //   return `${year}-${month}-${day}`;
  // }
  private formatDate(date: Date): string {
    const dayOfWeek = this.datePipe.transform(date, 'EEE', 'IST');
    const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy', 'IST');
    return `${dayOfWeek} ${formattedDate}`;

  }
  private formatTime(date: Date): string {
    return this.datePipe.transform(date, 'h:mm a', 'IST') || '';
  }

  ngOnInit(): void {
    this.weatherInfo();

  }

  weatherInfo() {
    this.weather.weatherforcast().subscribe((data) => {
      this.WeathertMessage = data;
      this.name = this.WeathertMessage.name;
      this.description = this.WeathertMessage.weather[0].description;
      this.temperature = this.WeathertMessage.main.temp;
      this.tempMax=this.WeathertMessage.main.temp_max;
      this.tempMin=this.WeathertMessage.main.temp_min;
      console.log(data);

      const sunriseTimestamp = this.WeathertMessage.sys.sunrise;
      const sunsetTimestamp = this.WeathertMessage.sys.sunset;

      this.sunriseTime = this.formatTimestamp(sunriseTimestamp);
      this.sunsetTime = this.formatTimestamp(sunsetTimestamp);

      console.log(data);
    });
  }
  formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Convert UNIX timestamp to milliseconds
    return this.datePipe.transform(date, 'shortTime', 'IST') || '';
  }

  togglePopup() {
    this.weather.popupVisible$.subscribe((visible) => {
      this.popupVisible = visible;
    });
    if (this.weather.popupVisible$) {
      this.weather.hidePopup();
    } else {
      this.weather.showPopup();
    }
  }
}

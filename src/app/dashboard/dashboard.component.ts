import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showHeader: boolean = false;
  popupVisible = false;
  constructor(private weather:DemoserviceService) { }

  ngOnInit(): void {
    this.showHeader = false;
    this.weather.popupVisible$.subscribe((visible) => {
      this.popupVisible = visible;
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

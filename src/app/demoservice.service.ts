import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {
  private popupVisibleSubject = new BehaviorSubject<boolean>(false);
  popupVisible$ = this.popupVisibleSubject.asObservable();
 
  constructor( private http: HttpClient, private router: Router) { }


  weatherforcast(){
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0197ad4bf748ed60c5abe848130d305e");
  }
 
  showPopup() {
    this.popupVisibleSubject.next(true);
  }
 
  hidePopup() {
    this.popupVisibleSubject.next(false);
  }
 

}

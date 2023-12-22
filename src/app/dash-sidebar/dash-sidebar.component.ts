import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-sidebar',
  templateUrl: './dash-sidebar.component.html',
  styleUrls: ['./dash-sidebar.component.css']
})
export class DashSidebarComponent implements OnInit {
  isToggled: boolean = false;
  sidebarVisible: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

toggleSidebar() {
    this.isToggled = !this.isToggled;
  }
  
  showSidebar() {
    this.sidebarVisible = true;
  }
}

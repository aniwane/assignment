import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashUdnavComponent } from './dash-udnav.component';

describe('DashUdnavComponent', () => {
  let component: DashUdnavComponent;
  let fixture: ComponentFixture<DashUdnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashUdnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashUdnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

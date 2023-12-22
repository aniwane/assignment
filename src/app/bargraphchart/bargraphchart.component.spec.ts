import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BargraphchartComponent } from './bargraphchart.component';

describe('BargraphchartComponent', () => {
  let component: BargraphchartComponent;
  let fixture: ComponentFixture<BargraphchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BargraphchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BargraphchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// fhfhfh
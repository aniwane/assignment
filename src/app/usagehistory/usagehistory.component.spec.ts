import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagehistoryComponent } from './usagehistory.component';

describe('UsagehistoryComponent', () => {
  let component: UsagehistoryComponent;
  let fixture: ComponentFixture<UsagehistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsagehistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsagehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

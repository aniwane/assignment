import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsizeComponent } from './systemsize.component';

describe('SystemsizeComponent', () => {
  let component: SystemsizeComponent;
  let fixture: ComponentFixture<SystemsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemsizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

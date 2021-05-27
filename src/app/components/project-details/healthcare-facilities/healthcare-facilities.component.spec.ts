import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareFacilitiesComponent } from './healthcare-facilities.component';

describe('HealthcareFacilitiesComponent', () => {
  let component: HealthcareFacilitiesComponent;
  let fixture: ComponentFixture<HealthcareFacilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthcareFacilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

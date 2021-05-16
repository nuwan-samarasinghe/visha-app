import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersEmptyComponent } from './careers-empty.component';

describe('CareersEmptyComponent', () => {
  let component: CareersEmptyComponent;
  let fixture: ComponentFixture<CareersEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

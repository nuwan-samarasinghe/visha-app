import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighriseBuildingComponent } from './highrise-building.component';

describe('HighriseBuildingComponent', () => {
  let component: HighriseBuildingComponent;
  let fixture: ComponentFixture<HighriseBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighriseBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighriseBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchesAndCemeteriesComponent } from './churches-and-cemeteries.component';

describe('ChurchesAndCemeteriesComponent', () => {
  let component: ChurchesAndCemeteriesComponent;
  let fixture: ComponentFixture<ChurchesAndCemeteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchesAndCemeteriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchesAndCemeteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

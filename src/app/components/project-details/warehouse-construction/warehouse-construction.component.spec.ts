import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseConstructionComponent } from './warehouse-construction.component';

describe('WarehouseConstructionComponent', () => {
  let component: WarehouseConstructionComponent;
  let fixture: ComponentFixture<WarehouseConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseConstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiResidenceDevelopmentComponent } from './multi-residence-development.component';

describe('MultiResidenceDevelopmentComponent', () => {
  let component: MultiResidenceDevelopmentComponent;
  let fixture: ComponentFixture<MultiResidenceDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiResidenceDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiResidenceDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

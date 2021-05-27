import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialAndGovernmentComponent } from './commercial-and-government.component';

describe('CommercialAndGovernmentComponent', () => {
  let component: CommercialAndGovernmentComponent;
  let fixture: ComponentFixture<CommercialAndGovernmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialAndGovernmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialAndGovernmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

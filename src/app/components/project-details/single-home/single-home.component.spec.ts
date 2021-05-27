import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHomeComponent } from './single-home.component';

describe('SingleHomeComponent', () => {
  let component: SingleHomeComponent;
  let fixture: ComponentFixture<SingleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

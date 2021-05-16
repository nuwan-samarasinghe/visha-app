import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsEmptyComponent } from './projects-empty.component';

describe('ProjectsEmptyComponent', () => {
  let component: ProjectsEmptyComponent;
  let fixture: ComponentFixture<ProjectsEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationpasseeComponent } from './formationpassee.component';

describe('FormationpasseeComponent', () => {
  let component: FormationpasseeComponent;
  let fixture: ComponentFixture<FormationpasseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationpasseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationpasseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

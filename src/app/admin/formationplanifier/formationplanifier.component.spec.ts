import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationplanifierComponent } from './formationplanifier.component';

describe('FormationplanifierComponent', () => {
  let component: FormationplanifierComponent;
  let fixture: ComponentFixture<FormationplanifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationplanifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationplanifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

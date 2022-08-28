import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheEvalComponent } from './fiche-eval.component';

describe('FicheEvalComponent', () => {
  let component: FicheEvalComponent;
  let fixture: ComponentFixture<FicheEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheEvalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantEvalComponent } from './participant-eval.component';

describe('ParticipantEvalComponent', () => {
  let component: ParticipantEvalComponent;
  let fixture: ComponentFixture<ParticipantEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantEvalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

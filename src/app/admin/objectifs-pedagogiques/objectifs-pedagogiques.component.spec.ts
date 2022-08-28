import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifsPedagogiquesComponent } from './objectifs-pedagogiques.component';

describe('ObjectifsPedagogiquesComponent', () => {
  let component: ObjectifsPedagogiquesComponent;
  let fixture: ComponentFixture<ObjectifsPedagogiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectifsPedagogiquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifsPedagogiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

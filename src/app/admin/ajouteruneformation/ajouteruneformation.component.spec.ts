import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteruneformationComponent } from './ajouteruneformation.component';

describe('AjouteruneformationComponent', () => {
  let component: AjouteruneformationComponent;
  let fixture: ComponentFixture<AjouteruneformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteruneformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteruneformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

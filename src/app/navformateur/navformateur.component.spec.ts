import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavformateurComponent } from './navformateur.component';

describe('NavformateurComponent', () => {
  let component: NavformateurComponent;
  let fixture: ComponentFixture<NavformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

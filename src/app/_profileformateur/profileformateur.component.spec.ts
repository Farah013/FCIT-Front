import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileformateurComponent } from './profileformateur.component';

describe('ProfileformateurComponent', () => {
  let component: ProfileformateurComponent;
  let fixture: ComponentFixture<ProfileformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

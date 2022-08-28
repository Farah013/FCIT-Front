import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteficheComponent } from './consultefiche.component';

describe('ConsulteficheComponent', () => {
  let component: ConsulteficheComponent;
  let fixture: ComponentFixture<ConsulteficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulteficheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulteficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

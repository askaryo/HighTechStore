import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneAccessoireComponent } from './telephone-accessoire.component';

describe('TelephoneAccessoireComponent', () => {
  let component: TelephoneAccessoireComponent;
  let fixture: ComponentFixture<TelephoneAccessoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneAccessoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneAccessoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

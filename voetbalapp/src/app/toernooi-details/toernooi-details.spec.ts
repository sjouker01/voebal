import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToernooiDetails } from './toernooi-details';

describe('ToernooiDetails', () => {
  let component: ToernooiDetails;
  let fixture: ComponentFixture<ToernooiDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToernooiDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToernooiDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

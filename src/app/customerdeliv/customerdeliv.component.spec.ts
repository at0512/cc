import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerdelivComponent } from './customerdeliv.component';

describe('CustomerdelivComponent', () => {
  let component: CustomerdelivComponent;
  let fixture: ComponentFixture<CustomerdelivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerdelivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerdelivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

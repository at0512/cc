import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayagesComponent } from './payages.component';

describe('PayagesComponent', () => {
  let component: PayagesComponent;
  let fixture: ComponentFixture<PayagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirydetailsComponent } from './inquirydetails.component';

describe('InquirydetailsComponent', () => {
  let component: InquirydetailsComponent;
  let fixture: ComponentFixture<InquirydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquirydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquirydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

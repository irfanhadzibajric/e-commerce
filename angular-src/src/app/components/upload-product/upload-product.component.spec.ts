import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProduct } from './upload-product.component';

describe('UploadProduct.ComponentComponent', () => {
  let component: UploadProduct;
  let fixture: ComponentFixture<UploadProduct>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadProduct],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

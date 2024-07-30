import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFomComponent } from './product-fom.component';

describe('ProductFomComponent', () => {
  let component: ProductFomComponent;
  let fixture: ComponentFixture<ProductFomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

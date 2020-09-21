import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListHeaderComponent } from './products-list-header.component';

describe('ProductsListHeaderComponent', () => {
  let component: ProductsListHeaderComponent;
  let fixture: ComponentFixture<ProductsListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

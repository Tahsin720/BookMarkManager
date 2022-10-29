import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBComponent } from './category-b.component';

describe('CategoryBComponent', () => {
  let component: CategoryBComponent;
  let fixture: ComponentFixture<CategoryBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

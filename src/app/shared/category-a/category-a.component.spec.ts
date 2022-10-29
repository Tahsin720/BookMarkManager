import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAComponent } from './category-a.component';

describe('CategoryAComponent', () => {
  let component: CategoryAComponent;
  let fixture: ComponentFixture<CategoryAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

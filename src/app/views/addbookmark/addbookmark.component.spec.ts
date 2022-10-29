import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookmarkComponent } from './addbookmark.component';

describe('AddbookmarkComponent', () => {
  let component: AddbookmarkComponent;
  let fixture: ComponentFixture<AddbookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbookmarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

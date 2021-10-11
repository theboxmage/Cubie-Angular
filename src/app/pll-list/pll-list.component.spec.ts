import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PllListComponent } from './pll-list.component';

describe('PllListComponent', () => {
  let component: PllListComponent;
  let fixture: ComponentFixture<PllListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PllListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OllListComponent } from './oll-list.component';

describe('OllListComponent', () => {
  let component: OllListComponent;
  let fixture: ComponentFixture<OllListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OllListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

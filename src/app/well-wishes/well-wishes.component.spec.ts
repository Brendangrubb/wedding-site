import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellWishesComponent } from './well-wishes.component';

describe('WellWishesComponent', () => {
  let component: WellWishesComponent;
  let fixture: ComponentFixture<WellWishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellWishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellWishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

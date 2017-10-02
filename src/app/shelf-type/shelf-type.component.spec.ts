import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfTypeComponent } from './shelf-type.component';

describe('ShelfTypeComponent', () => {
  let component: ShelfTypeComponent;
  let fixture: ComponentFixture<ShelfTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelfTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

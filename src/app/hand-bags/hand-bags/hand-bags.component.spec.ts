import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandBagsComponent } from './hand-bags.component';

describe('HandBagsComponent', () => {
  let component: HandBagsComponent;
  let fixture: ComponentFixture<HandBagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandBagsComponent]
    });
    fixture = TestBed.createComponent(HandBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

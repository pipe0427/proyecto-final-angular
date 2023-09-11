import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsusarioComponent } from './datos-ususario.component';

describe('DatosUsusarioComponent', () => {
  let component: DatosUsusarioComponent;
  let fixture: ComponentFixture<DatosUsusarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosUsusarioComponent]
    });
    fixture = TestBed.createComponent(DatosUsusarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

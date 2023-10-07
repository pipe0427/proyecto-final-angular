import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MugsComponent } from './mugs.component';

describe('MugsComponent', () => {
  let component: MugsComponent;
  let fixture: ComponentFixture<MugsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MugsComponent]
    });
    fixture = TestBed.createComponent(MugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

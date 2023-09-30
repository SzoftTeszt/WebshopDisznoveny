import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyovenyekComponent } from './nyovenyek.component';

describe('NyovenyekComponent', () => {
  let component: NyovenyekComponent;
  let fixture: ComponentFixture<NyovenyekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NyovenyekComponent]
    });
    fixture = TestBed.createComponent(NyovenyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

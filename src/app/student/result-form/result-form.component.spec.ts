import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultFormComponent } from './result-form.component';

describe('ResultFormComponent', () => {
  let component: ResultFormComponent;
  let fixture: ComponentFixture<ResultFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultFormComponent]
    });
    fixture = TestBed.createComponent(ResultFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigformsComponent } from './digforms.component';

describe('DigformsComponent', () => {
  let component: DigformsComponent;
  let fixture: ComponentFixture<DigformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoneditrendererComponent } from './buttoneditrenderer.component';

describe('ButtoneditrendererComponent', () => {
  let component: ButtoneditrendererComponent;
  let fixture: ComponentFixture<ButtoneditrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtoneditrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtoneditrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

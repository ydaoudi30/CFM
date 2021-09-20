import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonviewrendererComponent } from './buttonviewrenderer.component';

describe('ButtonviewrendererComponent', () => {
  let component: ButtonviewrendererComponent;
  let fixture: ComponentFixture<ButtonviewrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonviewrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonviewrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

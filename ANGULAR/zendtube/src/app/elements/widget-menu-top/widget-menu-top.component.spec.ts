import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMenuTopComponent } from './widget-menu-top.component';

describe('WidgetMenuTopComponent', () => {
  let component: WidgetMenuTopComponent;
  let fixture: ComponentFixture<WidgetMenuTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetMenuTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMenuTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

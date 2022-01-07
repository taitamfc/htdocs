import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMenuMainComponent } from './widget-menu-main.component';

describe('WidgetMenuMainComponent', () => {
  let component: WidgetMenuMainComponent;
  let fixture: ComponentFixture<WidgetMenuMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetMenuMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetMenuMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

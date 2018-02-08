import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenu4Component } from './top-menu4.component';

describe('TopMenu4Component', () => {
  let component: TopMenu4Component;
  let fixture: ComponentFixture<TopMenu4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenu4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenu4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

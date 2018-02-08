import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenu2Component } from './top-menu2.component';

describe('TopMenu2Component', () => {
  let component: TopMenu2Component;
  let fixture: ComponentFixture<TopMenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenu2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

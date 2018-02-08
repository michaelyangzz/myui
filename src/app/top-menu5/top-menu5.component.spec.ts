import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenu5Component } from './top-menu5.component';

describe('TopMenu5Component', () => {
  let component: TopMenu5Component;
  let fixture: ComponentFixture<TopMenu5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMenu5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenu5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

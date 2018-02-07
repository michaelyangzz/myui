import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarShortcutsComponent } from './sidebar-shortcuts.component';

describe('SidebarShortcutsComponent', () => {
  let component: SidebarShortcutsComponent;
  let fixture: ComponentFixture<SidebarShortcutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarShortcutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

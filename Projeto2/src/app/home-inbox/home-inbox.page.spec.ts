import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeInboxPage } from './home-inbox.page';

describe('HomeInboxPage', () => {
  let component: HomeInboxPage;
  let fixture: ComponentFixture<HomeInboxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

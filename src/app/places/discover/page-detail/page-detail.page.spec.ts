import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailPage } from './page-detail.page';

describe('PageDetailPage', () => {
  let component: PageDetailPage;
  let fixture: ComponentFixture<PageDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

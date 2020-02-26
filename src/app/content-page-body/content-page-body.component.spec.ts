import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPageBodyComponent } from './content-page-body.component';

describe('ContentPageBodyComponent', () => {
  let component: ContentPageBodyComponent;
  let fixture: ComponentFixture<ContentPageBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPageBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

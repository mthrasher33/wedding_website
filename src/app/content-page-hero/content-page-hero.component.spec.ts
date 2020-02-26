import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPageHeroComponent } from './content-page-hero.component';

describe('ContentPageHeroComponent', () => {
  let component: ContentPageHeroComponent;
  let fixture: ComponentFixture<ContentPageHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPageHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

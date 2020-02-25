import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboTilesComponent } from './combo-tiles.component';

describe('ComboTilesComponent', () => {
  let component: ComboTilesComponent;
  let fixture: ComponentFixture<ComboTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

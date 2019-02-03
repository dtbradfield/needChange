import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredConfigComponent } from './starred-config.component';

describe('StarredConfigComponent', () => {
  let component: StarredConfigComponent;
  let fixture: ComponentFixture<StarredConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWriterComponent } from './the-writer.component';

describe('TheWriterComponent', () => {
  let component: TheWriterComponent;
  let fixture: ComponentFixture<TheWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

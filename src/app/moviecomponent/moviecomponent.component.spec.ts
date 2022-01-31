import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecomponentComponent } from './moviecomponent.component';

describe('MoviecomponentComponent', () => {
  let component: MoviecomponentComponent;
  let fixture: ComponentFixture<MoviecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimacijaComponent } from './animacija.component';

describe('AnimacijaComponent', () => {
  let component: AnimacijaComponent;
  let fixture: ComponentFixture<AnimacijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

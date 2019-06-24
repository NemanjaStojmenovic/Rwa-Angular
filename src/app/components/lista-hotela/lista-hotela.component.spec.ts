import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHotelaComponent } from './lista-hotela.component';

describe('ListaHotelaComponent', () => {
  let component: ListaHotelaComponent;
  let fixture: ComponentFixture<ListaHotelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHotelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHotelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

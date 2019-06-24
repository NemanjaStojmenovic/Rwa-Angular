import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDestinacijaComponent } from './lista-destinacija.component';

describe('ListaDestinacijaComponent', () => {
  let component: ListaDestinacijaComponent;
  let fixture: ComponentFixture<ListaDestinacijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDestinacijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDestinacijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

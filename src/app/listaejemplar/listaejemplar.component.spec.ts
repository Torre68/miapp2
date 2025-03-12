import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaejemplarComponent } from './listaejemplar.component';

describe('ListaejemplarComponent', () => {
  let component: ListaejemplarComponent;
  let fixture: ComponentFixture<ListaejemplarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaejemplarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaejemplarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

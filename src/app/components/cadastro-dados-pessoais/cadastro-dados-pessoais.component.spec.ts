import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDadosPessoaisComponent } from './cadastro-dados-pessoais.component';

describe('CadastroDadosPessoaisComponent', () => {
  let component: CadastroDadosPessoaisComponent;
  let fixture: ComponentFixture<CadastroDadosPessoaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDadosPessoaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDadosPessoaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

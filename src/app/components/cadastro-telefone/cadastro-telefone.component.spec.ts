import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTelefoneComponent } from './cadastro-telefone.component';

describe('CadastroTelefoneComponent', () => {
  let component: CadastroTelefoneComponent;
  let fixture: ComponentFixture<CadastroTelefoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTelefoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

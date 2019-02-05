import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInteressesComponent } from './cadastro-interesses.component';

describe('CadastroInteressesComponent', () => {
  let component: CadastroInteressesComponent;
  let fixture: ComponentFixture<CadastroInteressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroInteressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroInteressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

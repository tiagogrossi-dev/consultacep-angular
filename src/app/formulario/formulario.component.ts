import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cepsService: FormularioService)
    {}

  //Recebimento dos dados Pessoais
  ngOnInit() {
    this.formulario = this.fb.group({
      nome:[''],
      cpf:[''],
      sexo:[''],
      cep:[''],
    });
  }

  //Recebimento dos dados de Endereço
  consultaCep(valor: any, form: any) {
    this.cepsService.buscar(valor).subscribe((dados) => this.populaForm(dados, form));
  }

  //Formulario com os dados de Endereço
  populaForm(dados: any, form: any) {
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    })
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log('Formulário válido. Dados:', this.formulario.value);
      // Validação de formulário para preenchimento de dados
    } else {
      console.log('Formulário inválido. Verifique os campos obrigatórios.');
    }
  }
  
}

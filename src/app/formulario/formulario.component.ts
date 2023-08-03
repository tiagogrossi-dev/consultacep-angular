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
  cep = '';
  endereco: any;

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
  buscarEndereco() {
    if (this.cep.length === 8) {
      this.cepsService.getEndereco(this.cep).subscribe((data) => {
        this.endereco = data;
        console.log("buscarEndereco", data)
      });
    }
  }

  clearForm() {
    this.endereco = null;
  }

//Envio de formulário realizando validações
  enviarFormulario() {
    if (this.formulario.valid) {
      console.log('Formulário válido. Dados:', this.formulario.value);
      // Validação de formulário para preenchimento de dados
    } else {
      console.log('Formulário inválido. Verifique os campos obrigatórios.');
    }
  }
  
}

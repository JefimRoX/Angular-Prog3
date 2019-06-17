import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent implements OnInit {

  contatos: Array<any>;
  formulario: FormGroup;
  client: string ='cliente';
  constructor(private service: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.configurarFormulario();
  }


  configurarFormulario() {
    this.formulario = this.formBuilder.group({

      nome: [null, this.validarObrigatoriedade],
      cpf: [null, [Validators.required]],
      telefone: [null, [Validators.required]]

    });
  }

  validarObrigatoriedade(input: FormControl) {
  
    return (input.value ? null : { obrigatoriedade: true });
  }

  criar() {
    this.service.criar(this.formulario.value,this.client).subscribe(resposta => {
      

      this.formulario.reset();
      
    });
  }

}

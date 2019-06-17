import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {



  contatos: Array<any>;
  formulario: FormGroup;
  client: string ='cliente';
  api:any[];
  id2:number;


  constructor(private service: ApiService,
    private formBuilder: FormBuilder,private route: ActivatedRoute) { }

  ngOnInit() {

    this.configurarFormulario();
    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
       
        this.id2 = + parametros['id'];
        this.puxar(this.id2 = + parametros['id']);

      }
    });


    
  }


  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, this.validarObrigatoriedade],
      cpf: [null, [Validators.required]],
      telefone: [null, [Validators.required]]
    });
  }

  validarObrigatoriedade(input: FormControl) {
  
    return (input.value ? null : { obrigatoriedade: true });
  }

  criar() {
    this.service.update(this.formulario.value,this.client).subscribe(resposta => {
      

      this.formulario.reset();
      
    });
  }

  puxar(id:number){
    this.service.puxar(this.client,this.id2).subscribe(data => {
     
      this.formulario.setValue({
        //@ts-ignore
        id: data.id,
        //@ts-ignore
        nome: data.nome,
        //@ts-ignore
        cpf: data.cpf,
        //@ts-ignore
        telefone: data.telefone
      });

    });

  }




}



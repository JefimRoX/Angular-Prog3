import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.css']
})
export class ProdutoNovoComponent implements OnInit {

  alerts: any[] = [{
    type: '',
    msg: ``,
    timeout:0
  }];
cat:any[];
  
  formulario: FormGroup;
  client: string ='produto';
  constructor(private service: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.configurarFormulario();
    this.listar();
 
  }

  listar(){

    this.service.listar('categoria').subscribe(dados => this.cat = dados) 
    
    }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({

      nome: [null, this.validarObrigatoriedade],
      quantidade: [null, [Validators.required]],
      valor: [null, [Validators.required]],
 
    });
  }

  validarObrigatoriedade(input: FormControl) {
  
    return (input.value ? null : { obrigatoriedade: true });
  }

  criar() {
    this.service.criar(this.formulario.value,this.client).subscribe(resposta => {
      
     this.add()
      this.formulario.reset();
      
    });
  }

  add(): void {
    this.alerts.push({
      type: 'info',
      msg: `----  Inserido com Sucesso  ---- `,
      timeout: 3000
    });
  }
 
  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }


}

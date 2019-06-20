import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';

@Component({
  selector: 'app-categoria-novo',
  templateUrl: './categoria-novo.component.html',
  styleUrls: ['./categoria-novo.component.css']
})

export class CategoriaNovoComponent implements OnInit {

  alerts: any[] = [{
    type: '',
    msg: ``,
    timeout:0
  }];

  formulario: FormGroup;
  categor: string ='categoria';
  constructor(private service: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.configurarFormulario();
  }


  configurarFormulario() {
    this.formulario = this.formBuilder.group({

      nome: [null, this.validarObrigatoriedade],
     

    });
  }

  validarObrigatoriedade(input: FormControl) {
  
    return (input.value ? null : { obrigatoriedade: true });
  }

  criar() {
    this.service.criar(this.formulario.value,this.categor).subscribe(resposta => {
      
      this.add();
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

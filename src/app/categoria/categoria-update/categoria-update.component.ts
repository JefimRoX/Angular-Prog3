import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  contatos: Array<any>;
  formulario: FormGroup;
  client: string ='categoria';
  api:any[];
  id2:number;


  constructor(private service: ApiService,
    private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router) { }

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
      nome: [null, this.validarObrigatoriedade]
      
    });
  }

  validarObrigatoriedade(input: FormControl) {
  
    return (input.value ? null : { obrigatoriedade: true });
  }

  update() {
    this.service.update(this.formulario.value,this.client).subscribe(resposta => {
      

      this.formulario.reset();
      this.router.navigate(['categoriaLista']);
    });
  }



  puxar(id:number){
    this.service.puxar(this.client,this.id2).subscribe(data => {
     
      this.formulario.setValue({
        //@ts-ignore
        id: data.id,
        //@ts-ignore
        nome: data.nome
       
      });

    });

  }




}

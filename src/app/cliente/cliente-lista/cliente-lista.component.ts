import { Component, OnInit, Input,TemplateRef } from '@angular/core';
import { ApiService } from '../../api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {


  

  @Input() api : any[];
   client: string ='cliente';
   modalRef: BsModalRef;
  constructor(private ApiService : ApiService, private modalService: BsModalService, private location: Location) { }

  ngOnInit() {
    this.listar();
  }


listar(){

this.ApiService.listar(this.client).subscribe(dados => this.api = dados) 

}

delete(id:number){

  this.ApiService.delete(this.client,id).subscribe();
  this.load();
}


openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
}

confirm(id:number): void {
  this.delete(id);
  this.modalRef.hide();
}

decline(): void {
  this.modalRef.hide();
}

load() {
  location.reload()
}

}

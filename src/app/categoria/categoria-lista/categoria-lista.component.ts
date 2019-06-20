import { Component, OnInit, Input,TemplateRef } from '@angular/core';
import { ApiService } from '../../api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  @Input() api : any[];
  categor: string ='categoria';
  modalRef: BsModalRef;
 constructor(private ApiService : ApiService, private modalService: BsModalService, private location: Location) { }

 ngOnInit() {
   this.listar();
 }


listar(){

this.ApiService.listar(this.categor).subscribe(dados => this.api = dados) 

}

delete(id:number){

 this.ApiService.delete(this.categor,id).subscribe();
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

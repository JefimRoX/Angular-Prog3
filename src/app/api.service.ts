import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  vendedoresURL = 'https://prog3-api.herokuapp.com/api/';

  constructor(private http : HttpClient) {


   }

   listar(tipo :string){
    
    return this.http.get<any[]>(`${this.vendedoresURL+tipo}`);

  }



  criar(objeto: any,tipo :string) {
    return this.http.post(this.vendedoresURL+tipo, objeto);
  }

  puxar(tipo :string,id:number){
    
    return this.http.get<any[]>(`${this.vendedoresURL+tipo + "/"+ id }`);
  
  }

  delete(tipo :string,id:number){
    
    return this.http.delete<any[]>(`${this.vendedoresURL+tipo + "/"+ id }`);
  
  }

  update(objeto: any,tipo :string) {
    return this.http.put(this.vendedoresURL+tipo, objeto);
  }

}



  


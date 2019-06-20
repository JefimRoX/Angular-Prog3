import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { ClienteNovoComponent } from './cliente/cliente-novo/cliente-novo.component';
import { ClienteUpdateComponent } from './cliente/cliente-update/cliente-update.component';
import { CategoriaUpdateComponent } from './categoria/categoria-update/categoria-update.component';
import { CategoriaNovoComponent } from './categoria/categoria-novo/categoria-novo.component';
import { CategoriaListaComponent } from './categoria/categoria-lista/categoria-lista.component';
import { ProdutoNovoComponent } from './produto/produto-novo/produto-novo.component';


const routes: Routes = [
  { path: '', component: ClienteNovoComponent },
  { path: 'clienteLista', component: ClienteListaComponent },
  { path: 'clienteNovo', component: ClienteNovoComponent },
  { path: 'clienteUpdate/:id', component: ClienteUpdateComponent },
  { path: 'categoriaUpdate/:id', component: CategoriaUpdateComponent },
  { path: 'categoriaNovo', component: CategoriaNovoComponent },
  { path: 'categoriaLista', component: CategoriaListaComponent },
  { path: 'ProdutoNovo', component: ProdutoNovoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

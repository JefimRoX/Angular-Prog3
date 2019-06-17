import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { ClienteNovoComponent } from './cliente/cliente-novo/cliente-novo.component';
import { ClienteUpdateComponent } from './cliente/cliente-update/cliente-update.component';

const routes: Routes = [
  { path: '', component: ClienteNovoComponent },
  { path: 'clienteLista', component: ClienteListaComponent },
  { path: 'clienteNovo', component: ClienteNovoComponent },
  { path: 'clienteUpdate/:id', component: ClienteUpdateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

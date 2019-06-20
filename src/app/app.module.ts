import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from  './api.service';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClienteNovoComponent } from './cliente/cliente-novo/cliente-novo.component';
import { ClienteUpdateComponent } from './cliente/cliente-update/cliente-update.component';
import { CategoriaNovoComponent } from './categoria/categoria-novo/categoria-novo.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CategoriaListaComponent } from './categoria/categoria-lista/categoria-lista.component';
import { ProdutoNovoComponent } from './produto/produto-novo/produto-novo.component';
import { CategoriaUpdateComponent } from './categoria/categoria-update/categoria-update.component';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClienteListaComponent,
    ClienteNovoComponent,
    ClienteUpdateComponent,
    CategoriaNovoComponent,
    CategoriaListaComponent,
    ProdutoNovoComponent,
    CategoriaUpdateComponent,
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
     NgbAlertModule,
     CollapseModule.forRoot(),
     BrowserAnimationsModule,
     Ng2SearchPipeModule,
     FormsModule,
     ModalModule.forRoot(),
     AlertModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

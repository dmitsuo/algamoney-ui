import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from 'primeng/inputmask';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    PessoasGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    BrowserAnimationsModule,
    InputMaskModule,
    SharedModule
  ],
  exports: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent
  ]
})
export class PessoasModule { }

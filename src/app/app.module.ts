import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LancamentosModule } from './lancamentos/lancamentos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    PessoasModule,
    LancamentosModule,
    SidebarModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

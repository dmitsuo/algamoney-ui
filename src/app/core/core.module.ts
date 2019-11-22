import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    SidebarModule,
    PanelMenuModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }

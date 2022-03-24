import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    SideMenuComponent
  ]
})
export class CoreModule { }

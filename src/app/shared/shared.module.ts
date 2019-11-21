import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent]
})
export class SharedModule { }

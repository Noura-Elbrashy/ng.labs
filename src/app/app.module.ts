import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [BrowserModule, CommonModule, FormsModule, HttpClientModule], // Add CommonModule
  bootstrap: [AppComponent]
})
export class AppModule {}
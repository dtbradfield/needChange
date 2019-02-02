import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TheProgrammerComponent } from './the-programmer/the-programmer.component';
import { TheManComponent } from './the-man/the-man.component';
import { TheWriterComponent } from './the-writer/the-writer.component';

@NgModule({
  declarations: [
    AppComponent,
    TheProgrammerComponent,
    TheManComponent,
    TheWriterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

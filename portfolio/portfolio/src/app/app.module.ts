import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TheProgrammerComponent } from './the-programmer/the-programmer.component';
import { TheManComponent } from './the-man/the-man.component';
import { TheWriterComponent } from './the-writer/the-writer.component';
import { AppRoutingModule } from './app-routing.module';
import { StarredConfigComponent } from './starred-config/starred-config.component';

@NgModule({
  declarations: [
    AppComponent,
    TheProgrammerComponent,
    TheManComponent,
    TheWriterComponent,
    StarredConfigComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

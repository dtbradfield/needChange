import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TheProgrammerComponent } from './the-programmer/the-programmer.component';
import { AppComponent } from './app.component';
import { TheWriterComponent } from './the-writer/the-writer.component';
import { TheManComponent } from './the-man/the-man.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

const routes: Routes = [
  { path: 'home', component: AppComponent }
]

export class AppRoutingModule { }

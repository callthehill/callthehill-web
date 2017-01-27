import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CallsComponent } from './calls/calls.component';

const routes: Routes = [
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    CallsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsdeusuarioComponent } from 'src/app/features/ticketsdeusuario/ticketsdeusuario.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsdeusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

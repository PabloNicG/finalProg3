//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { ModalComponent } from './componentes/modal/modal.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './componentes/table/table.component';
//import { ElementoComponent } from './componentes/elementos/elemento.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PersonaService } from './servicios/persona.service';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    //ElementoComponent,
    //ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

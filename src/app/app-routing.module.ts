//import { ModalComponent } from './componentes/modal/modal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ElementoComponent } from './componentes/elementos/elemento.component';
import {TableComponent} from './componentes/table/table.component'
import { from } from 'rxjs';

const routes: Routes = [
//no se utilizaran 

 // {path: '', component: TableComponent},
 // {path: 'persona/:id', component: ModalComponent},
 // {path: '**', pathMatch: 'full', redirectTo: ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

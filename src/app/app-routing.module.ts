import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElementoComponent } from './componentes/elementos/elemento.component';
import {TableComponent} from './componentes/table/table.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'persona/:id', component: ElementoComponent},
  {path: '**', pathMatch: 'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

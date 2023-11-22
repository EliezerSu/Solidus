import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaDeTramitesComponent } from './bandeja-de-tramite/bandeja-de-tramites.component';


const routes: Routes = [
{ path:'bandeja-de-entrada', component: BandejaDeTramitesComponent},


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

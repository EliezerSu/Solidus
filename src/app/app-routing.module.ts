import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandejaDeTramitesComponent } from './bandeja-de-tramite/bandeja-de-tramites.component';


const routes: Routes = [
{ path:'bandeja-de-tramite', component: BandejaDeTramitesComponent},
{path: '**', redirectTo:'', pathMatch:'prefix'},



];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

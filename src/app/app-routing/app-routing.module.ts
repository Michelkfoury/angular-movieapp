import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviecomponentComponent } from '../moviecomponent/moviecomponent.component';
import { DetailsComponent } from '../details/details.component';


const routes: Routes = [
  {
  path: '',
  component: MoviecomponentComponent,
  },
  {path:"details",
  component:DetailsComponent
  },
  ];
  @NgModule({
    imports: [
    RouterModule.forRoot(routes)
    ],
    exports: [
    RouterModule
    ],
    declarations: []
    })
export class AppRoutingModule { }

  
  

 
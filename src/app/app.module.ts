import { NgModule } from '@angular/core';
import{HttpClient, HttpClientModule, HttpContext}from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MoviecomponentComponent } from './moviecomponent/moviecomponent.component';
import { DetailsComponent } from './details/details.component';
import { MovieApiService } from './movie-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviecomponentComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    AppRoutingModule


  ],
  providers: [MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

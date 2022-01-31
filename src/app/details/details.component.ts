import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiService } from '../movie-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private servise:MovieApiService) { }
moviedetails$!:Observable<any[]>;
  ngOnInit(): void {
    this.moviedetails$=this.servise.getmoviedetails();
  }

}

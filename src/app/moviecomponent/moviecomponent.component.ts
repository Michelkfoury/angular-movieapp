import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';

import { MovieApiService } from '../movie-api.service';



@Component({
  selector: 'app-moviecomponent',
  templateUrl: './moviecomponent.component.html',
  styleUrls: ['./moviecomponent.component.css']
})
export class MoviecomponentComponent implements OnInit {

  topmovielist$!:Observable<any[]>;
  topTvShowlist$!:Observable<any[]>;
  constructor(private service:MovieApiService) { }

  ngOnInit(): void {
    this.topTvShowlist$=this.service.gettopTvShowlist();
    this.topmovielist$=this.service.gettopmovielist();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
readonly movieapiURL = "https://localhost:7126/api";
Api_key="ddf9442c69a1aa97524b66e3cba8b9b0";
  constructor(private http: HttpClient) {} 
  
  
  
  gettopmovielist():Observable<any[]>
  { let params1 = new HttpParams()
    .set('api_key', this.Api_key);

return this.http.get<any>(this.movieapiURL+'/movies',{params:params1});


  }
  id="550";
  getmoviedetails():Observable<any[]>{
    let params1 = new HttpParams()
    .set('movie_id', this.id);
    return this.http.get<any>(this.movieapiURL+'movies/{movie_id}',{params:params1});
  }
  
  gettopTvShowlist():Observable<any[]>
  { let params1 = new HttpParams()
    .set('api_key', this.Api_key);

return this.http.get<any>(this.movieapiURL+'/movies/toptvshows',{params:params1});


  }
}

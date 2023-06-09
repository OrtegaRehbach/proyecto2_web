import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { environment as env } from "src/environments/environment";
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  testGames = [
    {
      background_image: "",
      name: "Halo: Infinite", 
      released: "15/11/2021", 
      metacritic_url: "https://www.metacritic.com/game/xbox-series-x/halo-infinite", 
      website: "Website",
      description: "", 
      metacrititc: 87,
      genres: {
        name: "Action"
      }
    }
  ]

  constructor(private http: HttpClient  ) { }

  // : Observable<APIResponse<Game>>
  getGameList(ordering: string, search?: string) {
    let params = new HttpParams()
      .set("key", env.API_KEY)
      .set("ordering", ordering);
    
      if (search) {
      params = new HttpParams()
        .set("key", env.API_KEY)
        .set("ordering", ordering)
        .set("search", search);
    }

    return this.http.get(`${env.BASE_URL}/games`, {params: params});
  }

  getHighestRatedNow(limit: number) {
    const currentYear = new Date().getFullYear();
    let params = new HttpParams()
      .set("key", env.API_KEY)
      .set("dates", `${currentYear}-01-01,${currentYear}-12-31`)
      .set("ordering", "-metacritic")
      .set("page_size", limit);
    
    return this.http.get(`${env.BASE_URL}/games`, {params: params});
  }

  getHighestRatedInGenre(limit: number, genre: string) {
    // const currentYear = new Date().getFullYear();
    let params = new HttpParams()
      .set("key", env.API_KEY)
      .set("genres", genre)
      // .set("dates", `${currentYear}-01-01,${currentYear}-12-31`)
      .set("page_size", limit);
    
    return this.http.get(`${env.BASE_URL}/games`, {params: params});
  }

  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`);
    const gameScreenshotsRequest = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`);

    return forkJoin({
      gameInfoRequest,
      gameTrailersRequest,
      gameScreenshotsRequest
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotsRequest']?.results,
          trailers: resp['gameTrailersRequest']?.results
        }
      }));
  }
}

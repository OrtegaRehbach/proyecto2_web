import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // public featuredGames: Array<Game>;
  public games: Array<Game>;
  
  constructor(private gameService: GamesService, private activadetRoute: ActivatedRoute) {
    this.games = [];
  }
  
  ngOnInit(): void {
    this.activadetRoute.params.subscribe((params: Params) => {
      this.searchGames("-metacritic")
    });
  }
  
  searchGames(sort: string, search?: string): void {
    this.gameService
      .getGameList(sort, search)
      .subscribe((gameList: any) => {
        this.games = (gameList as APIResponse<Game>).results;
        console.log(gameList);
      });
  }

}

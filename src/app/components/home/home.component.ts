import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public actionGames: Array<Game>;
  public rpgGames: Array<Game>;
  public multiplayerGames: Array<Game>;
  public racingGames: Array<Game>;
  public games: Array<Game>;
  
  constructor(private gameService: GamesService, private activadetRoute: ActivatedRoute, private router: Router) {
    this.actionGames = [];
    this.rpgGames = [];
    this.multiplayerGames = [];
    this.racingGames = [];
    this.games = [];
  }
  
  ngOnInit(): void {
    this.activadetRoute.params.subscribe((params: Params) => {
      this.searchGames("-metacritic")
      this.getGamesByGenre(10, "action", this.actionGames);
      this.getGamesByGenre(10, "role-playing-games-rpg", this.rpgGames);
      this.getGamesByGenre(10, "massively-multiplayer", this.multiplayerGames);
      this.getGamesByGenre(10, "racing", this.racingGames);
    });
  }
  
  searchGames(sort: string, search?: string): void {
    this.gameService
      .getGameList(sort, search)
      .subscribe((gameList: any) => {
        this.games = (gameList as APIResponse<Game>).results;
      });
  }

  getGamesByGenre(limit: number, genre: string, output: Array<Game>) {
    this.gameService
      .getHighestRatedInGenre(limit, genre)
      .subscribe((gameList: any) => {
        output.push( ...(gameList as APIResponse<Game>).results.filter(game => {
          return typeof game.metacritic !== "object";
        }) );
      });      
  }

}

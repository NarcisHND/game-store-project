import {Injectable} from "@angular/core";
import {GameModel} from "./interface/game.model";
import {FreeGameModel} from "./interface/free-game.model";
import {RecommendedGameModel} from "./interface/recommended-game.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()

export class GamesDataService {


  constructor(private http: HttpClient) {
  }

  getGameFromGamesData(id: number) {
    return this.http.get<GameModel>(environment.fireBaseUrl + 'gamesData/' + id + '.json');
  }

  getGameFromFreeGamesData(id: number) {
    return this.http.get<FreeGameModel>(environment.fireBaseUrl + 'freeGamesData/' + id + '.json');
  }

  getGameFromLandscapeGamesData(id: number) {
    return this.http.get<GameModel>(environment.fireBaseUrl + 'landscapeGamesData/' + id + '.json');
  }

  getGames() {
    return this.http.get<GameModel[]>(environment.fireBaseUrl + 'gamesData.json');
  }

  getRecommendedGames() {
    return this.http.get<RecommendedGameModel[]>(environment.fireBaseUrl + 'recommendedGamesData.json');
  }

  getLandscapeGames() {
    return this.http.get<GameModel[]>(environment.fireBaseUrl + 'landscapeGamesData.json');
  }

  getFreeGames() {
    return this.http.get<FreeGameModel[]>(environment.fireBaseUrl + 'freeGamesData.json');
  }

  fetchData() {
    // return this.http.put(environment.fireBaseUrl + 'freeGamesData.json', this.freeGames);
  }

  selectAllRandomGames(numberGames: number, gamesData: GameModel[]): GameModel[] {
    let gameData: GameModel[] = gamesData;
    let randomNumber!: number;
    let uniqueSet: GameModel[] = [];
    let sortSet!: Set<GameModel>;
    let games: GameModel[] = [];

    return this.randomFunction(numberGames, randomNumber, gameData, games, sortSet, uniqueSet);
  }

  selectFreeRandomGames(numberGames: number, gamesData: FreeGameModel[]): FreeGameModel[] {
    let gameData: FreeGameModel[] = gamesData;
    let randomNumber!: number;
    let uniqueSet: FreeGameModel[] = [];
    let sortSet!: Set<FreeGameModel>;
    let games: FreeGameModel[] = [];

    return this.randomFunction(numberGames, randomNumber, gameData, games, sortSet, uniqueSet);
  }

  randomFunction(numberGames: number, randomNumber: number, gameData: FreeGameModel[] | GameModel[], games: unknown[], sortSet: any, uniqueSet: any) {
    do {
      randomNumber = Math.floor(Math.random() * gameData.length);
      if (gameData) {
        games.push(gameData[randomNumber]);
      }
      sortSet = new Set(games);
      uniqueSet = [...sortSet];
    } while (uniqueSet?.length < numberGames);

    return uniqueSet;
  }
}

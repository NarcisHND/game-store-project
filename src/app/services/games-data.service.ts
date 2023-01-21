import {Injectable} from "@angular/core";
import {GameInterfaceModel} from "./interface/game-interface.model";
import {FreeGameInterfaceModel} from "./interface/free-game-interface.model";
import {RecommendedGameInterfaceModel} from "./interface/recommended-game-interface.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()

export class GamesDataService {

  constructor(private http: HttpClient) {
  }

  getRecommendedGames() {
    return this.http.get<RecommendedGameInterfaceModel[]>(environment.fireBaseUrl + 'recommendedGamesData.json');
  }

  getGames() {
    return this.http.get<GameInterfaceModel[]>(environment.fireBaseUrl + 'gamesData.json');
  }

  getLandscapeGames() {
    return this.http.get<GameInterfaceModel[]>(environment.fireBaseUrl + 'landscapeGamesData.json');
  }

  getFreeGames() {
    return this.http.get<FreeGameInterfaceModel[]>(environment.fireBaseUrl + 'freeGamesData.json');
  }

  selectAllRandomGames(numberGames: number, gamesData: GameInterfaceModel[]) {
    let gameData: GameInterfaceModel[] = gamesData;
    let randomNumber!: number;
    let uniqueSet: GameInterfaceModel[] = [];
    let sortSet!: Set<GameInterfaceModel>;
    let games: GameInterfaceModel[] = [];

    return this.randomFunction(numberGames, randomNumber, gameData, games, sortSet, uniqueSet);
  }

  selectFreeRandomGames(numberGames: number, gamesData: FreeGameInterfaceModel[]) {
    let gameData: FreeGameInterfaceModel[] = gamesData;
    let randomNumber!: number;
    let uniqueSet: FreeGameInterfaceModel[] = [];
    let sortSet!: Set<FreeGameInterfaceModel>;
    let games: FreeGameInterfaceModel[] = [];

    return this.randomFunction(numberGames, randomNumber, gameData, games, sortSet, uniqueSet);
  }

  randomFunction(numberGames: number, randomNumber: number, gameData: any, games: any, sortSet: any, uniqueSet: any) {
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

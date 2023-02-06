import {Injectable} from "@angular/core";
import {GameModel} from "./interface/game.model";
import {FreeGameModel} from "./interface/free-game.model";
import {RecommendedGameModel} from "./interface/recommended-game.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GamesTypeCardModel} from "./interface/gamesTypeCard-model";
import {Observable} from "rxjs";

@Injectable()

export class GamesDataService {

  constructor(private http: HttpClient) {
  }

  getGameFromGamesData(id: number): Observable<GameModel> {
    return this.http.get<GameModel>(environment.fireBaseUrl + 'gamesData/' + id + '.json');
  }

  getGameFromFreeGamesData(id: number): Observable<GameModel> {
    return this.http.get<GameModel>(environment.fireBaseUrl + 'freeGamesData/' + id + '.json');
  }

  getGameFromLandscapeGamesData(id: number): Observable<GameModel> {
    return this.http.get<GameModel>(environment.fireBaseUrl + 'landscapeGamesData/' + id + '.json');
  }

  getGamesTypesCard(): Observable<GamesTypeCardModel[]> {
    return this.http.get<GamesTypeCardModel[]>(environment.fireBaseUrl + 'gamesTypesCard.json');
  }

  getGames(): Observable<GameModel[]> {
    return this.http.get<GameModel[]>(environment.fireBaseUrl + 'gamesData.json');
  }

  getRecommendedGames(): Observable<RecommendedGameModel[]> {
    return this.http.get<RecommendedGameModel[]>(environment.fireBaseUrl + 'recommendedGamesData.json');
  }

  getLandscapeGames(): Observable<GameModel[]> {
    return this.http.get<GameModel[]>(environment.fireBaseUrl + 'landscapeGamesData.json');
  }

  getFreeGames(): Observable<GameModel[]> {
    return this.http.get<GameModel[]>(environment.fireBaseUrl + 'freeGamesData.json');
  }

  // fetchData() {
  //   return this.http.put(environment.fireBaseUrl + 'gamesTypesCard.json', this.gameTypeCarouselData);
  // }

  selectAllRandomGames(numberGames: number, gamesData: GameModel[]): GameModel[] {
    let gameData: GameModel[] = gamesData;
    let randomNumber!: number;
    let uniqueSet: GameModel[] = [];
    let sortSet!: Set<GameModel>;
    let games: GameModel[] = [];

    return this.randomFunction(numberGames, randomNumber, gameData, games, sortSet, uniqueSet);
  }

  // selectFreeRandomGames(numberGames: number, gamesData: FreeGameModel[]): FreeGameModel[] {
  //   let gameData: FreeGameModel[] = gamesData;
  //   let randomNumber!: number;
  //   let uniqueSet: FreeGameModel[] = [];
  //   let sortSet!: Set<FreeGameModel>;
  //   let games: FreeGameModel[] = [];
  //
  //   return this.randomFunction(numberGames, randomNumber, gameData, games, sortSet, uniqueSet);
  // }

  randomFunction(numberGames: number, randomNumber: number, gameData: GameModel[], games: unknown[], sortSet: any, uniqueSet: any) {
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

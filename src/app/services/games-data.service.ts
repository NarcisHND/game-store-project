import {Injectable} from "@angular/core";
import {GameModel} from "./interface/game.model";
import {RecommendedGameModel} from "./interface/recommended-game.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GamesTypeCardModel} from "./interface/gamesTypeCard-model";
import {Observable} from "rxjs";
import {GamingNewsCardModel} from "./interface/gaming-news-card.model";

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

  getNewGamingNews(): Observable<GamingNewsCardModel[]> {
    return this.http.get<GamingNewsCardModel[]>(environment.fireBaseUrl + 'newGamingNewsCards.json');
  }

  // fetchData() {
  //   return this.http.put(environment.fireBaseUrl + 'newGamingNewsCards.json', this.newGamingNewsCards);
  // }

  // selectAllRandomGames(numberGames: number, gamesData: GameModel[]): GameModel[] {
  //   const gameData: GameModel[] = gamesData;
  //   let randomNumber!: number;
  //   const games: GameModel[] = [];
  //
  //   return this.randomFunction(numberGames, randomNumber, gameData, games);
  // }

  selectAllRandomGames(numberGames: number, gameData: GameModel[]) {
    let uniqueSet: GameModel[];
    const games: GameModel[] = [];
    do {
      const randomNumber = Math.floor(Math.random() * gameData.length);
      if (gameData) {
        games.push(gameData[randomNumber]);
      }
      const sortSet = new Set(games);
      uniqueSet = [...sortSet];
    } while (uniqueSet?.length < numberGames);

    return uniqueSet;
  }
}

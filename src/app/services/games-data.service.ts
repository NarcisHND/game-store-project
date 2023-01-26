import {Injectable} from "@angular/core";
import {GameModel} from "./interface/game.model";
import {FreeGameModel} from "./interface/free-game.model";
import {RecommendedGameModel} from "./interface/recommended-game.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {GamesTypeCardModel} from "./interface/gamesTypeCard-model";

@Injectable()

export class GamesDataService {

  private gameTypeCarouselData = [
    new GamesTypeCardModel(
      'action-adventure',
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/09/Games-With-Some-Of-The-Best-Melee-Combat-featured-image.jpg'
    ),
    new GamesTypeCardModel(
      'strategy',
      'https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F03%2Fsteeldivision.jpg&signature=0b3054650753687a1c5676e186da3157'
    ),
    new GamesTypeCardModel(
      'shooters',
      'https://as01.epimg.net/meristation/imagenes/2021/11/26/reportajes/1637951010_581176_1637951477_noticia_normal.jpg'
    ),
    new GamesTypeCardModel(
      'simulation-sport',
      'https://images.hive.blog/0x0/https://images.nintendolife.com/336f7e3c22c4c/best-switch-sports-games.original.jpg'
    ),
    new GamesTypeCardModel(
      'upcoming',
      'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/12/upcoming-pc-games.jpg'
    )
  ]

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

  getGamesTypesCard() {
    return this.http.get<GamesTypeCardModel[]>(environment.fireBaseUrl + 'gamesTypesCard.json');
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
    return this.http.put(environment.fireBaseUrl + 'gamesTypesCard.json', this.gameTypeCarouselData);
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

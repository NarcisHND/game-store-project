import {Injectable} from "@angular/core";
import {GameModel} from "./interface/game.model";
import {FreeGameModel} from "./interface/free-game.model";
import {RecommendedGameModel} from "./interface/recommended-game.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()

export class GamesDataService {
  private allGames: GameModel[] = [
    new GameModel(
      1,
      'Grand Theft Auto V',
      'action-adventure',
      'https://p1.akcdn.net/full/86857090.rockstar-games-grand-theft-auto-v-pc.jpg',
      13.99,
      'pc',
      1),
    new GameModel(
      2,
      'Forza Horizon 4',
      'simulation-sport',
      'https://store-images.s-microsoft.com/image/apps.36093.14339303838396367.725ab8dd-f8b7-4a29-a351-45ebd5d66edd.ba2a2523-7f32-4f92-a83d-26097b7b6ca1',
      16.99,
      'pc',
      1),
    new GameModel(
      3,
      'Gears of War 3',
      'shooters',
      'https://upload.wikimedia.org/wikipedia/en/d/dc/Gears_of_War_3_box_artwork.png',
      11.99,
      'pc',
      1),
    new GameModel(
      4,
      'Dead Rising 4',
      'shooters',
      'https://store-images.s-microsoft.com/image/apps.1353.65509226370944490.f82aa561-02d9-4c13-a034-158ddc68a226.3dfc22db-4e51-40b3-ae8a-da40a05baf01',
      29.99,
      'ps4',
      1),
    new GameModel(
      5,
      'Apex Legends',
      'shooters',
      'https://p1.akcdn.net/full/615648946.electronic-arts-apex-legends-bloodhound-edition-pc.jpg',
      10.99,
      'xbox',
      1),
    new GameModel(
      6,
      'Call of Duty WW2',
      'shooters',
      'https://upload.wikimedia.org/wikipedia/en/1/18/Call_of_Duty_WWII_Cover_Art.jpg',
      30.99,
      'xbox',
      1),
    new GameModel(
      7,
      'Call of Duty Warzone',
      'shooters',
      'https://upload.wikimedia.org/wikipedia/ru/5/5f/COD_Warzone.jpg',
      50.99,
      'pc',
      1),
    new GameModel(
      8,
      'PUBG Battlegrounds',
      'strategy',
      'https://s1.gaming-cdn.com/images/products/1995/orig-fallback-v1/playerunknowns-battlegrounds-pc-game-steam-cover.jpg',
      30.99,
      'ps4',
      1),
    new GameModel(
      9,
      'FIFA 22',
      'simulation-sport',
      'https://cdn-products.eneba.com/resized-products/aZVburjOk80fasUmRT_R3JDmbr4xdzNxgHSNXa1viQQ_350x200_1x-0.jpeg',
      100.99,
      'ps4',
      1),
    new GameModel(
      10,
      'UFC 3',
      'simulation-sport',
      'https://www.ubuy.com.ro/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFsT1h3RUJRTkwuX1NMMTUwMF8uanBn.jpg',
      98.99,
      'ps4',
      1),
    new GameModel(
      11,
      'Farming Simulator 19',
      'action-adventure',
      'https://smartcdkeys.com/image/data/products/farming-simulator-19-premium-edition/cover/farming-simulator-19-premium-edition-smartcdkeys-cheap-cd-key-cover.jpg',
      130.99,
      'pc',
      1),
    new GameModel(
      12,
      'World of Tanks',
      'shooters',
      'https://static-cdn.jtvnw.net/ttv-boxart/27546-272x380.jpg',
      98.99,
      'ps4',
      1),
    new GameModel(
      13,
      'The Amazing Spider-man',
      'action-adventure',
      'https://m.media-amazon.com/images/M/MV5BMTUxNDM4NzU3MV5BMl5BanBnXkFtZTcwNDg4NTQwOA@@._V1_.jpg',
      98.99,
      'xbox',
      1),
    new GameModel(
      14,
      'Batman Arkham City',
      'action-adventure',
      'https://m.media-amazon.com/images/M/MV5BM2ZhOWQ2YzgtZWMzOS00ZWQ0LWE4NjAtYzlhYzRiNTEyNTBmXkEyXkFqcGdeQXVyNjI2OTgxNzY@._V1_FMjpg_UX1000_.jpg',
      98.99,
      'ps4',
      1),
    new GameModel(
      15,
      'Batman Arkham Asylum',
      'action-adventure',
      'https://www.mobygames.com/images/promo/original/1546235145-667351490.png',
      98.99,
      'ps4',
      1),
    new GameModel(
      16,
      'Call Of Duty World at War',
      'shooters',
      'https://upload.wikimedia.org/wikipedia/ru/thumb/5/56/Codwaw_boxart.jpg/800px-Codwaw_boxart.jpg',
      98.99,
      'pc',
      1),
    new GameModel(
      17,
      'Call of Duty 2',
      'shooters',
      'https://preview.redd.it/mxa2z5pxy0a21.jpg?width=640&crop=smart&auto=webp&s=5cf4d6ce1e9cd5cf7aee52366dfd6483887c8d9e',
      98.99,
      'pc',
      1),
    new GameModel(
      18,
      'Call of Duty Modern Warfare 4',
      'shooters',
      'https://i.pinimg.com/originals/dd/95/37/dd953759130d51f4492b5273c64d259e.jpg',
      98.99,
      'xbox',
      1),
    new GameModel(
      19,
      'Call of Duty Black Ops',
      'shooters',
      'https://www.mobygames.com/images/covers/l/207201-call-of-duty-black-ops-xbox-360-front-cover.jpg',
      98.99,
      'xbox',
      1),
    new GameModel(
      20,
      'Call of Duty Black Ops 2',
      'shooters',
      'https://www.mobygames.com/images/covers/l/310096-call-of-duty-black-ops-ii-xbox-360-front-cover.png',
      98.99,
      'xbox',
      1),
    new GameModel(
      21,
      'Call of Duty Modern Warfare 3',
      'shooters',
      'https://m.media-amazon.com/images/I/513ymj64iRL._AC_.jpg',
      98.99,
      'xbox',
      1),
    new GameModel(
      22,
      'Call of Duty Vanguard',
      'shooters',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YK9LWVxbAcPyhVrFZk9YBDi53mdtd6UgPK4hJsVEr7osTlyWoy400rFnLWGg7-D1sCc&usqp=CAU',
      98.99,
      'pc',
      1),
    new GameModel(
      23,
      'Stronghold Crusader',
      'strategy',
      'https://elamigosedition.com/uploads/posts/2020-11/1604498093_stronghold-crusader-extreme-hd-cover-download.webp',
      98.99,
      'pc',
      1),
    new GameModel(
      24,
      'FIFA 14',
      'simulation-sport',
      'https://m.media-amazon.com/images/I/919c6T4ZmWL._AC_SX425_.jpg',
      98.99,
      'ps4',
      1),
    new GameModel(
      25,
      'FIFA 16',
      'simulation-sport',
      'https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AJ6T2K/66928afbee044d5aa3736ba9dd39b767.jpg/f/fifa-16-nordic.jpg',
      98.99,
      'ps4',
      1),
    new GameModel(
      26,
      'FIFA 2001',
      'simulation-sport',
      'https://m.media-amazon.com/images/I/8180zH-OKAL._AC_SY879_.jpg',
      98.99,
      'pc',
      1),
    new GameModel(
      27,
      'Cross Fire',
      'shooters',
      'https://media.senscritique.com/media/000014844213/source_big/Cross_Fire.jpg',
      98.99,
      'ps4',
      1),
    new GameModel(
      28,
      'PayDay 2',
      'shooters',
      'https://img.g2a.com/323x433/1x1x0/payday-2-steam-key-global/590dd79c5bafe31ae71ae412',
      98.99,
      'pc',
      1),
    new GameModel(
      29,
      'NBA2K21',
      'simulation-sport',
      'https://image.jeuxvideo.com/medias/159353/1593525634-3879-jaquette-avant.jpg',
      98.99,
      'pc',
      1),
    new GameModel(
      30,
      'Halo',
      'shooters',
      'https://m.media-amazon.com/images/I/719G5ws-qmL._SX522_.jpg',
      98.99,
      'xbox',
      1),
    new GameModel(
      31,
      'Star Wars Force Unleashed',
      'upcoming',
      'https://lumiere-a.akamaihd.net/v1/images/The-Force-Unleashed-Poster_4f2601ea.jpeg?region=0%2C0%2C1000%2C1500&width=960',
      98.99,
      'xbox',
      1),
    new GameModel(
      32,
      'Tom Clancy Rainbow Six Siege',
      'upcoming',
      'https://cdn1.epicgames.com/carnation/offer/r6s-y6-epic-std-store-portrait-1200x1600-1200x1600-8ecd88137e14-1200x1600-05e68a0aed3dc068b9b4186997b97317.jpeg',
      98.99,
      'xbox',
      1),
    new GameModel(
      33,
      'Tom Clancy Ghost Recon Wildlands',
      'upcoming',
      'https://p1.akcdn.net/full/641647803.ubisoft-tom-clancy-s-ghost-recon-wildlands-year-2-gold-edition-pc.jpg',
      98.99,
      'xbox',
      1),
    new GameModel(
      34,
      'Asterix & Obelix',
      'upcoming',
      'https://image.api.playstation.com/vulcan/img/cfn/11307QzL5kdEEByBgYQsKbrNUCr4eRcB4WxhKUOf5y7iVj8EqsB7mAR1TLzTQ_VRZXCQd3MdZS4sAo-H5N4y2fZB6MUwSBVa.png',
      98.99,
      'xbox',
      1),
    new GameModel(
      35,
      'Sonic Forces',
      'upcoming',
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/9135/9135802_sa.jpg',
      98.99,
      'xbox',
      1),
  ]

  constructor(private http: HttpClient) {
  }

  getRecommendedGames() {
    return this.http.get<RecommendedGameModel[]>(environment.fireBaseUrl + 'recommendedGamesData.json');
  }

  getGames() {
    return this.http.get<GameModel[]>(environment.fireBaseUrl + 'gamesData.json');
  }

  getGame(id: number) {
    return this.http.get<GameModel>(environment.fireBaseUrl + 'gamesData/' + id + '.json');
  }

  getLandscapeGames() {
    return this.http.get<GameModel[]>(environment.fireBaseUrl + 'landscapeGamesData.json');
  }

  getFreeGames() {
    return this.http.get<FreeGameModel[]>(environment.fireBaseUrl + 'freeGamesData.json');
  }

  selectAllRandomGames(numberGames: number, gamesData: GameModel[]) {
    let gameData: GameModel[] = gamesData;
    let randomNumber!: number;
    let uniqueSet: GameModel[] = [];
    let sortSet!: Set<GameModel>;
    let games: GameModel[] = [];

    return this.randomFunction(numberGames, randomNumber, gameData, games, sortSet, uniqueSet);
  }

  selectFreeRandomGames(numberGames: number, gamesData: FreeGameModel[]) {
    let gameData: FreeGameModel[] = gamesData;
    let randomNumber!: number;
    let uniqueSet: FreeGameModel[] = [];
    let sortSet!: Set<FreeGameModel>;
    let games: FreeGameModel[] = [];

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

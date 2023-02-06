export class GameModel {
  public id: number
  public name: string;
  public type: string;
  public image: string;
  public price: number | string;
  public platform: string;
  public amount: number;
  public description?: string;
  public validity?: string;
  public date?: string;

  constructor(id: number, name: string, type: string, image: string, price: number, platform: string, amount: number, description?: string, validity?: string, date?: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.image = image;
    this.price = price;
    this.platform = platform;
    this.amount = amount;
    this.description = description;
    this.validity = validity;
    this.date = date;
  }
}

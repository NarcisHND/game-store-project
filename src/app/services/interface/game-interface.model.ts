export class GameInterfaceModel {
  public name: string;
  public type: string;
  public image: string;
  public price: number;
  public platform: string;
  public amount: number;
  public description?: string;

  constructor(name: string, type: string, image: string, price: number, platform: string, amount: number, description?: string) {
    this.name = name;
    this.type = type;
    this.image = image;
    this.price = price;
    this.platform = platform;
    this.amount = amount;
    this.description = description;
  }
}

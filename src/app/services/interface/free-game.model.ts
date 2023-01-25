export class FreeGameModel {
  public id: number;
  public name: string;
  public image: string;
  public validity: string;
  public date: string;
  public type: string;
  public platform: string;
  public price: number | string;

  constructor(id: number, name: string, image: string, validity: string, date: string, platform: string, type: string, price: number | string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.validity = validity;
    this.date = date;
    this.type = type;
    this.platform = platform;
    this.price = price;
  }
}

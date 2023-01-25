export class RecommendedGameModel {
  public name: string;
  public image: string;
  public price: string | number;
  public validity: string;
  public description: string;

  constructor(name: string, image: string, validity: string, description: string, price: string | number) {
    this.name = name;
    this.image = image;
    this.validity = validity;
    this.description = description;
    this.price = price;
  }
}

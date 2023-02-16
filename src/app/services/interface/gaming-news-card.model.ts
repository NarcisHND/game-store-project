export class GamingNewsCardModel {
  public name: string;
  public description: string;
  public date: string;
  public image: string;

  constructor(name: string, description: string, date: string, image: string) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.image = image;
  }
}

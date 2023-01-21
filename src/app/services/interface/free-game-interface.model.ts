export class FreeGameInterfaceModel {
  public name: string;
  public image: string;
  public validity: string;
  public date: string;

  constructor(name: string, image: string, validity: string, date: string) {
    this.name = name;
    this.image = image;
    this.validity = validity;
    this.date = date;
  }
}

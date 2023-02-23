import {Component} from "@angular/core";
import {ModalService} from "../../../../services/modal.service";


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {

  constructor(private modalService: ModalService) {
  }

  openModal(id: string): void {
    this.modalService.open(id);
  }
}

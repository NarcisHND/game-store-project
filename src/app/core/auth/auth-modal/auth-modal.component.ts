import {Component} from "@angular/core";
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: "app-auth-modal",
  templateUrl: "./auth-modal.component.html",
  styleUrls: ["./auth-modal.component.scss"]
})
export class AuthModalComponent {
  public changeAuth = "login";

  constructor(private modalService: ModalService) {
  }

  closeModal(id: string): void {
    this.modalService.close(id);
  }

  changeAuthContent(content: string) {
    this.changeAuth = content;
  }
}

import {Component, ElementRef, Input, OnDestroy, OnInit, Renderer2} from "@angular/core";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  private readonly element: HTMLElement;

  constructor(private modalService: ModalService, private el: ElementRef, private renderer: Renderer2) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    // ensure id attribute exists
    if (!this.id) {
      console.error("modal must have an id");
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener("click", (el: MouseEvent) => {
      const target: HTMLButtonElement = el.target as HTMLButtonElement;

      if (target.className === "modal-background" || target.className === "modal") {
        this.close();
      }
    });

    // add self (this modal instance) to the modal service, so it's accessible from controllers
    this.modalService.add(this);
  }

  // open modal
  open(): void {
    this.renderer.setAttribute(this.element.firstChild, "id", "modalOpen");
    this.renderer.setAttribute(this.element.lastChild, "id", "backdropIn");
    this.renderer.setStyle(this.element.firstChild, "display", "block");
    this.renderer.setStyle(this.element.lastChild, "display", "block");
    document.body.classList.add("app-modal-open");
  }

  // close modal
  close(): void {
    this.renderer.setAttribute(this.element.firstChild, "id", "modalClose");
    this.renderer.setAttribute(this.element.lastChild, "id", "backdropOut");
    setTimeout(() => {
      this.renderer.setStyle(this.element.firstChild, "display", "none");
      this.renderer.setStyle(this.element.lastChild, "display", "none");
    }, 600);
    document.body.classList.remove("app-modal-open");
  }

  ngOnDestroy() {
    this.modalService.remove(this.id);
    this.element.remove();
  }
}

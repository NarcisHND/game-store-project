import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GamesTypeCarouselComponent } from "./games-type-carousel.component";

describe("GamesTypeCarouselComponent", () => {
  let component: GamesTypeCarouselComponent;
  let fixture: ComponentFixture<GamesTypeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesTypeCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesTypeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

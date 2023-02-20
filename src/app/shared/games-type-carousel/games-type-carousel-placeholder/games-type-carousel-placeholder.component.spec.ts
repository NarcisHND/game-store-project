import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GamesTypeCarouselPlaceholderComponent } from "./games-type-carousel-placeholder.component";

describe("GamesTypeCarouselPlaceholderComponent", () => {
  let component: GamesTypeCarouselPlaceholderComponent;
  let fixture: ComponentFixture<GamesTypeCarouselPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesTypeCarouselPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesTypeCarouselPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GamingNewsSecondaryCardComponent } from "./gaming-news-secondary-card.component";

describe("GamingNewsSecondaryCardComponent", () => {
  let component: GamingNewsSecondaryCardComponent;
  let fixture: ComponentFixture<GamingNewsSecondaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamingNewsSecondaryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamingNewsSecondaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

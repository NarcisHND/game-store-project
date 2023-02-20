import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GamesOnSaleComponent } from "./games-on-sale.component";

describe("GamesOnSaleComponent", () => {
  let component: GamesOnSaleComponent;
  let fixture: ComponentFixture<GamesOnSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesOnSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesOnSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

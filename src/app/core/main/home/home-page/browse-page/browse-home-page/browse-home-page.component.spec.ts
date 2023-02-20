import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BrowseHomePageComponent } from "./browse-home-page.component";

describe("BrowseHomePageComponent", () => {
  let component: BrowseHomePageComponent;
  let fixture: ComponentFixture<BrowseHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowseHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

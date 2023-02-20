import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BrowserPagePlaceholderComponent } from "./browser-page-placeholder.component";

describe("BrowserPagePlaceholderComponent", () => {
  let component: BrowserPagePlaceholderComponent;
  let fixture: ComponentFixture<BrowserPagePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserPagePlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrowserPagePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

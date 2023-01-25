import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderGamePageComponent } from './placeholder-game-page.component';

describe('PlaceholderGamePageComponent', () => {
  let component: PlaceholderGamePageComponent;
  let fixture: ComponentFixture<PlaceholderGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderGamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceholderGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

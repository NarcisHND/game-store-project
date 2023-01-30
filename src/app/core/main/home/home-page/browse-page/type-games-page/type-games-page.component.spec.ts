import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeGamesPageComponent } from './type-games-page.component';

describe('TypeGamesPageComponent', () => {
  let component: TypeGamesPageComponent;
  let fixture: ComponentFixture<TypeGamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeGamesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

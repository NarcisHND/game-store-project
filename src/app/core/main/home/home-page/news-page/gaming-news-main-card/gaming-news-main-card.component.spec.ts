import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GamingNewsMainCardComponent} from './gaming-news-main-card.component';

describe('GameNewsCardComponent', () => {
  let component: GamingNewsMainCardComponent;
  let fixture: ComponentFixture<GamingNewsMainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamingNewsMainCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GamingNewsMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

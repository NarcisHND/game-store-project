import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPagePlaceholderComponent } from './news-page-placeholder.component';

describe('NewsPagePlaceholderComponent', () => {
  let component: NewsPagePlaceholderComponent;
  let fixture: ComponentFixture<NewsPagePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPagePlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsPagePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

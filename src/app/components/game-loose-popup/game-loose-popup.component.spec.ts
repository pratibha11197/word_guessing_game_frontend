import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLoosePopupComponent } from './game-loose-popup.component';

describe('GameLoosePopupComponent', () => {
  let component: GameLoosePopupComponent;
  let fixture: ComponentFixture<GameLoosePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLoosePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLoosePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

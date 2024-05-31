import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWinPopupComponent } from './game-win-popup.component';

describe('GameWinPopupComponent', () => {
  let component: GameWinPopupComponent;
  let fixture: ComponentFixture<GameWinPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameWinPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWinPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

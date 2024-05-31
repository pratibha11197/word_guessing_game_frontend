import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { PlayComponent } from './components/game/play/play.component';
import { FormsModule } from '@angular/forms';
import { GameWinPopupComponent } from './components/game-win-popup/game-win-popup.component';
import { GameLoosePopupComponent } from './components/game-loose-popup/game-loose-popup.component';
import { GameOverPopupComponent } from './components/game-over-popup/game-over-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayComponent,
    GameWinPopupComponent,
    GameLoosePopupComponent,
    GameOverPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

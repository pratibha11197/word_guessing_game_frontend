import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { PlayComponent } from './components/game/play/play.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'play', component: PlayComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

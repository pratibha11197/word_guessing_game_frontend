import { Component, OnInit } from '@angular/core';
import { PlayServiceService } from 'src/app/service/play-service.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  word!: string[];
  originalWord!: string;
  life: number = 5;
  guessdedWord!: any;
  showWinPopup: boolean = false;
  showLoosePopup: boolean = false;
  showOverPopup: boolean = false;

  constructor(private playservice: PlayServiceService) { }

  ngOnInit(): void {
    this.guessdedWord = "";
    this.getRandomWord();
  }

  getRandomWord(){
    this.playservice.getWord().subscribe((data) => {
      if (data) {
        this.originalWord = data.word;
        this.word = data.word.split('');
        this.getDisplayWord();
      }
    })
  }

  getDisplayWord(){
    this.life = 5;
    
    // fill blank character to guess those characters
    for(let i = 0; i < this.word.length/4; i++){
      let randomIndex = this.selectRandomCharacterIndex();
      if(randomIndex-1 >= 0 &&  randomIndex+1 < this.word.length){
        if(this.word[randomIndex-1] == "*" || this.word[randomIndex+1] == "*" ){
          i--;
          continue;
        }
      }
      this.word[randomIndex] = "*";
    }
  }

  selectRandomCharacterIndex(): number {
    // Generate a random index within the range of the word length
    let randomIndex = Math.floor(Math.random() * this.word.length);
    return randomIndex;
  }

  guess(){
    if(this.guessdedWord == ""){
      alert("Please enter a word to guess...");
    }
    else{
    if(this.guessdedWord.toLowerCase() === this.originalWord.toLowerCase()){
      this.openWinPopup();
      this.delayedFunction();
      this.getRandomWord();
      this.guessdedWord = "";
    }
    else{
      if(this.life > 0){
        this.openLoosePopup();
        this.delayedFunction();
        this.life = this.life - 1;
      }
      else{
        this.openGameOverPopup();
        this.delayedFunction();
        this.getRandomWord();
        this.guessdedWord = "";
      }
    }
    }
  }

  playNext(){
    this.getRandomWord();
    this.guessdedWord = "";
  }

  openWinPopup() {
    this.showWinPopup = true;
  }

  closeWinPopup() {
    this.showWinPopup = false;
  }

  openLoosePopup() {
    this.showLoosePopup = true;
  }

  closeLoosePopup() {
    this.showLoosePopup = false;
  }

  openGameOverPopup() {
    this.showOverPopup = true;
  }

  closeGameOverPopup() {
    this.showOverPopup = false;
  }

  delayedFunction() {
    setTimeout(() => {
      this.closeWinPopup();
      this.closeLoosePopup();
      this.closeGameOverPopup();
    }, 1000);
  }
}

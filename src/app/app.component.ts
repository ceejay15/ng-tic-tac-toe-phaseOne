import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-tic-tac-toe-pwa';
  filled: any = [false,false,false,false,false,false,false, false, false];
  board : any = ["","","","","","","","",""];
  hasWinner : boolean = false;
  winner : string = "";
  openSlots : any = [];

  checkFilled(index){
    this.getAvailableSlots();

    if(!this.hasWinner){
      if(this.board[index]!=""){
        console.log("no");
        this.filled[index] = true;       
      }else{
       this.board[index]="X";
       this.openSlots.splice(index,1);    
       this.pcTurn();
       this.getWinner();
      }
    }    
  }

  getAvailableSlots() {
    this.openSlots = [];

    for (let i = 0; i <= (this.board.length) - 1; i++) {
      if (this.board[i] == "") {
        this.openSlots.push(i);
        continue;
      }
    }

    return this.openSlots;
  }

  pcTurn(){
    let index = this.openSlots[Math.floor(Math.random()*this.openSlots.length)] 
    
    this.board[index] = "O";
    this.filled[index] =  true;
    this.openSlots.splice(index,0);

    console.warn("BOARD:", this.board);

    this.getWinner();
  }

  getWinner() {
    if (this.board[0] == "O" && this.board[1] == "O" && this.board[2] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[0] == "X" && this.board[1] == "X" && this.board[2] == "X") {
     
      this.hasWinner = true;
      this.winner = "YOU"
    } else if (this.board[3] == "O" && this.board[4] == "O" && this.board[5] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[3] == "X" && this.board[4] == "X" && this.board[5] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[6] ==  "O" && this.board[7] ==  "O" && this.board[8] ==  "O") {
      this.hasWinner = true;
      this.winner = "PC"
    } else if (this.board[6] == "X" && this.board[7] == "X" && this.board[8] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[0] == "O" && this.board[4] == "O" && this.board[8] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[0] == "X" && this.board[4] == "X" && this.board[8] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[2] == "O" && this.board[4] == "O" && this.board[6] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[2] == "X" && this.board[4] == "X" && this.board[6] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[0] == "O" && this.board[4] == "O" && this.board[8] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[0] == "X" && this.board[4] == "X" && this.board[8] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[0] == "O" && this.board[1] == "O" && this.board[7] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[0] == "X" && this.board[1] == "X" && this.board[7] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[2] == "O" && this.board[5] == "O" && this.board[8] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[2] == "X" && this.board[5] == "X" && this.board[8] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[3] == "O" && this.board[4] == "O" && this.board[5] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[3] == "X" && this.board[4] == "X" && this.board[5] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[1] == "O" && this.board[4] == "O" && this.board[7] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[1] == "X" && this.board[4] == "X" && this.board[7] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[3] == "O" && this.board[5] == "O" && this.board[8] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[3] == "X" && this.board[5] == "X" && this.board[8] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    } else if (this.board[0] == "O" && this.board[3] == "O" && this.board[6] == "O") {
      this.hasWinner = true;
      this.winner = "PC";
    } else if (this.board[0] == "X" && this.board[3] == "X" && this.board[6] == "X") {
      this.hasWinner = true;
      this.winner = "YOU";
    }
  }  

  reset(){
    this.winner = "";
    this.hasWinner  = false;
    this.board = ["","","","","","","",""];
    this.openSlots = [];
    this.filled = [false, false, false, false, false, false, false, false];
  }
}

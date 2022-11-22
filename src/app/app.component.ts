import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'noamAngularApp';
  message="hello world";
  constructor(){}

  recieveMessage($event:string)
  {
      this.message=$event;
  }
  sendMessageToHeader(){
    this.message="shalom"
  }
}

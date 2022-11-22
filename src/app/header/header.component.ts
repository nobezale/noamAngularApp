import { Component,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() titleHeader = '';
  @Input() message:string="";
  @Output() messageEvent=new EventEmitter<string>();
  constructor(){}
  sendMessage(){
    this.message="hi shula"
    this.messageEvent.emit(this.message);
  }

}

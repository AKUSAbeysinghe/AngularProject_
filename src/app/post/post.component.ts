import { Component, OnInit, Input, output, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  title: string ="List of Posts";
  messagePost: string ='Message Post';

  postParentMessage: string ='Message coming from the post parent ';
  childMessage: string = 'From Child Component';
  outputChildMessage: string ='Message from the child component via output';

  @Input() fromParent: string | undefined;
  
  @Output() messageEvent = new EventEmitter<string>();
  constructor(){}

  ngOnInit(): void {}

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }

}

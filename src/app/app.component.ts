/**import { Component, ViewChild,  AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'Ang';
  parentMessage: string ='Message Changed';
  message: string | undefined ;
  fromChildOutput: string | undefined 

  @ViewChild(PostComponent)
  childComp!: { childMessage: string | undefined; }; 

  constructor(){
    console.log(this.childComp);
  }


  

  ngAfterViewInit() {
    console.log(this.childComp);
    this.message = this.childComp.childMessage;
  }

  receiveMessage($event: string){
    this.fromChildOutput = $event;
  }

}

*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 message: string ="Messsage From Typescript Component File"
 imgUrl: string = 'https://gaillardcenter.org/wp-content/uploads/Event-Page-Graphic-1920x1080-1.jpg';

}

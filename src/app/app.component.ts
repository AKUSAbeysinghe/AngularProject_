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
//A perfect introduction to live theater! The puppetry is spectacular.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
buttonClick() {
console.log('Button click Event Worked!');
}
 title(title: any) {
   throw new Error('Method not implemented.');
 }
 //message: string ="Messsage From Typescript Component File"
 //imgUrl: string = 'https://gaillardcenter.org/wp-content/uploads/Event-Page-Graphic-1920x1080-1.jpg';

 bool: boolean = true;
 userName: string | undefined;
 textValue: string = "Value is coming from component"

 onKeyup(){
  


    console.log(this.textValue);
 }


 postTitle: string | undefined; 
 postDetails: string | undefined; 
 imageURL: string | undefined;
 postURL: string | undefined;
 addBackground: boolean | undefined;



}

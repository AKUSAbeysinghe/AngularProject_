import { Component, OnInit, Input, output, EventEmitter, Output } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  providers: [PostService]
})
export class PostComponent implements OnInit {

  title: string ="List of Posts";
  messagePost: string ='Message Post';

  postParentMessage: string ='Message coming from the post parent ';
  childMessage: string = 'From Child Component';
  outputChildMessage: string ='Message from the child component via output';

  @Input() fromParent: string | undefined;
  
  @Output() messageEvent = new EventEmitter<string>();
  posts: Array<any> | undefined;
  constructor(private postService:PostService){

    //let postService = new PostService()
    // this.posts = postService.postList;
  }

  ngOnInit(): void {}

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }


  addNewData(){
    let newPost ={id: 7,
      postTitle: "post 7"
    }

    this.postService.addPost(newPost);
  }

}

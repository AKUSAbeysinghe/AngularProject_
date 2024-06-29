import { Component,OnInit,Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  providers: [PostService]


})
export class PostListComponent implements OnInit  {

  @Input() fromPostParent: string | undefined;

  postList: Array<any> | undefined;
  constructor(private postService: PostService){

    this.postList = this.postList
  }

  ngOnInit(): void {}

}

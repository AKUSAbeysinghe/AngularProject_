import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit  {

  @Input() fromPostParent: string | undefined;

  constructor(){}

  ngOnInit(): void {}

}

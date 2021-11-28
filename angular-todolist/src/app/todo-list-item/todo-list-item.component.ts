import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {
  // comes from the parents
  @Input() todo: any;

  constructor() { }

  ngOnInit(): void {
  }

}

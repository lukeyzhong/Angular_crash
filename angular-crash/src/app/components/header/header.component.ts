import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task tracker';
  constructor() { }
  // this is a life cycle method.!initialize some codes
  ngOnInit(): void {
  }
  toggleAddTask() {
    console.log("toggle");
  }

}

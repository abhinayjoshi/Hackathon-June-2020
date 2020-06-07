import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  color = '#C5CAE9';
  username = 'Abhinay Joshi';

  constructor() { }

  ngOnInit() {
  }

}

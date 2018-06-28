import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.css']
})
export class MountainsComponent implements OnInit {

  mountain = 'Elbert';
  
  constructor() { }

  ngOnInit() {
  }

}

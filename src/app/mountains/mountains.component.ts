import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.css']
})
export class MountainsComponent implements OnInit {

  mountain: Mountain = {
    rank: 1,
    name: 'Mt. Elbert',
    elevation: 14433,
    img: "https://www.14ers.com/photos/mtelbert/201207_Elbert01a_l.jpg?lu=20180101"
  }

  constructor() { }

  ngOnInit() {
  }

}

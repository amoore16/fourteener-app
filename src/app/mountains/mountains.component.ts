import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MOUNTAINS } from '../mock-mountains';


@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.css']
})
export class MountainsComponent implements OnInit {

  mountains = MOUNTAINS;

  selectedMountain: Mountain;

  onSelect(mountain: Mountain): void {
    this.selectedMountain = mountain;
  }

  constructor() { }

  ngOnInit() {
    
  }


}

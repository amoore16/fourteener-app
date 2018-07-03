import { Component, OnInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MountainService } from '../mountain.service';


@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.css']
})
export class MountainsComponent implements OnInit {
  
  selectedMountain: Mountain;
  
  mountains: Mountain[];
  
  constructor(private mountainService: MountainService) { }
  

  
  ngOnInit() {
    this.getMountains();
  }
  
  onSelect(mountain: Mountain): void {
    this.selectedMountain = mountain;
  }
  
  getMountains(): void {
    this.mountainService.getMountains()
      .subscribe(mountains => this.mountains = mountains);
  }

}

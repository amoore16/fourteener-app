import { Component, OnInit, Input } from '@angular/core';
import { Mountain } from '../mountain';

@Component({
  selector: 'app-mountain-detail',
  templateUrl: './mountain-detail.component.html',
  styleUrls: ['./mountain-detail.component.css']
})
export class MountainDetailComponent implements OnInit {

  @Input() mountain: Mountain;

  constructor() { }

  ngOnInit() {
  }

}

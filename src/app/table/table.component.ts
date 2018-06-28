import { Component, OnInit } from '@angular/core';
import { MountainTableService } from '../mountain-table.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  mountains: Observable<any[]>;
  columns: string[];

  constructor(private mtService: MountainTableService) { }

  ngOnInit() {
    this.columns = this.mtService.getColumns();
    this.mountains = this.mtService.getMountains();
  }

}

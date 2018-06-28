import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOUNTAINS } from './mock-mountains';


@Injectable({
  providedIn: 'root'
})
export class MountainTableService {

  constructor() { }

  getMountains(): Observable<any[]>{
    return of(MOUNTAINS);
  }

  getColumns(): string[]{
    return ["rank", "name", "elevation"]
  }

}

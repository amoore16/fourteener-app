import { Injectable } from '@angular/core';
import { Mountain } from './mountain';
import { MOUNTAINS } from './mock-mountains';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MountainService {

  constructor() { }

  getMountains(): Observable<Mountain[]> {
    return of(MOUNTAINS);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class CounterService {

  public counter : number = 0;

  constructor() { }

  public incCounter () {
    this.counter++;
  }
  
  public decCounter () {
    this.counter--;
  }

}

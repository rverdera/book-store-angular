import { Injectable } from '@angular/core';

@Injectable()
export class Counter2Service   {

  public  counter : number = 0;

  constructor() { 
    
  }

  public incCounter () {
    this.counter += 2;
  }

  public decCounter () {
    this.counter -= 2;
  }

}

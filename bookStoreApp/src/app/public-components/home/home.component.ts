import { Component, Inject, OnInit} from '@angular/core';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public count: number = 0;
  public test: boolean = false;
  constructor(public _testService: TestService) { }

  ngOnInit(): void {
    
  }

  counter() : void {
    this.count++;
    this.test = !this.test;
  }

  
}

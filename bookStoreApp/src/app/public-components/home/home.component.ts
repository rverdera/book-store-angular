import { Component, Inject, OnInit} from '@angular/core';
import { AuthorModel } from 'src/app/shared/models/authors.model';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public count: number = 0;
  public test: boolean = false;

  public obj : AuthorModel = {
    id: 10,
    name: 'nitish'
  };

  constructor(public _testService: TestService) { 
    console.log('Hello from parent Constructor');
  }

  ngOnInit(): void {
    console.log('Hello from parent ngOnInit');
  }

  counter() : void {
    this.count++;
    this.test = !this.test;
    this.obj.id = this.count++
  }

  
}

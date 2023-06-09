import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AuthorModel } from '../../models/authors.model';
import { AuthorsAddressComponent } from '../authors-address/authors-address.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

  @ContentChild(AuthorsAddressComponent) authAddress: AuthorsAddressComponent;

  @Input() data: number;
  @Input() data2: boolean;
  @Input() author: AuthorModel;

  public childCounter: number = 0;

  constructor() {
    console.log('Hello from child Constructor');
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit ' + this.authAddress?.address);

  }
  ngAfterContentChecked(): void {
    console.log('AfterContentchecked ' + this.authAddress?.address);
  }
  ngDoCheck(): void {
    //console.log(this.author);

  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);

  }

  ngOnInit(): void {
    console.log('Hello from child ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Authors component destroy');    
  }

  incCounter() : void {
    this.childCounter++;
  }



}

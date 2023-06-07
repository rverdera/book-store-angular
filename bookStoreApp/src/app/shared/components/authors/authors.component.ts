import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit, OnChanges{ 

  @Input() data: number;

  @Input() data2: boolean;

  constructor() { 
    console.log('Hello from child Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngOnInit(): void {
    console.log('Hello from child ngOnInit');
    
  }

 

}

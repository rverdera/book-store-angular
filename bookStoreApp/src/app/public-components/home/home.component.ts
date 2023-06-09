import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { AuthorsComponent } from 'src/app/shared/components/authors/authors.component';
import { AuthorModel } from 'src/app/shared/models/authors.model';
import { TestService } from 'src/app/shared/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy{

  @ViewChild('btnCounter') btnCounter: ElementRef;
  @ViewChild(AuthorsComponent) authComponent: AuthorsComponent;

  public count: number = 0;
  public test: boolean = false;
  public address: string = 'India';

  public obj : AuthorModel = {
    id: 10,
    name: 'nitish'
  };

  private time: any;

  constructor(public _testService: TestService) { 
    //console.log('Hello from parent Constructor');
    //console.log(this.btnCounter);
  }

  ngOnDestroy(): void {
    console.log('Home component destroy');
    clearInterval(this.time);

  }

  ngAfterViewChecked(): void {
    //console.log(this.authComponent.childCounter);
    
  }
  ngAfterViewInit(): void {
    //console.log(this.btnCounter);
    //this.btnCounter.nativeElement.innerHTML = 'Button Text Updated'
  }

  ngOnInit(): void {
    console.log('Hello from parent ngOnInit');
    this.timer();
  }

  counter() : void {
    this.count++;
    this.test = !this.test;
    this.obj.id = this.count++
    this.address = this.address + this.count;
  }

  timer() : void {
    this.time = setInterval(()=> {
      this.count++
      console.log(this.count);      
    }, 1000)
  }
}

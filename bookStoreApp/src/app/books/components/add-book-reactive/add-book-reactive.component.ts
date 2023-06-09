import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit {


  prices: any[] = [
    { value: 100, viewValue: '100' },
    { value: 200, viewValue: '200' },
    { value: 300, viewValue: '300' },
  ];

  currencies: any[] = [
    { value: 'USD', viewValue: 'US Dollar' },
    { value: 'INR', viewValue: 'Indian Rupees' }

  ];

  public addBookForm: FormGroup;

  constructor(private _bookService: BookService) {

  }

  ngOnInit(): void {
    this.initForm();
    
    console.log(this.addBookForm.controls['title']);
    console.log(this.addBookForm.get('title'));
    
    
  }


  updateFormValues(): void {

    this.addBookForm.patchValue({
      title: 'nitish kaushik',
      author: 'default nitish'
    });

  }

  saveBook(): void {

    console.log(this.addBookForm.value);

    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value);
    } else {
      alert('Form Invalid');
    }

  }


  private initForm(): void {

    this.addBookForm = new FormGroup({
      title: new FormControl('nitish', [
        Validators.required,
        Validators.minLength(10)
      ]),
      author: new FormControl(null, Validators.required),
      totalPages: new FormControl(),
      price: new FormGroup({
        currency: new FormControl(),
        value: new FormControl()
      }),
      publishedOn: new FormControl(),
      isPublished: new FormControl()
    });    
  }



}

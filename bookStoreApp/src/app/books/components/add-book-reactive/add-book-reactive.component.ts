import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book-reactive',
  templateUrl: './add-book-reactive.component.html',
  styleUrls: ['./add-book-reactive.component.scss']
})
export class AddBookReactiveComponent implements OnInit {

  public titleErrorMessage: string;
  prices: any[] = [
    { value: 100, viewValue: '100' },
    { value: 200, viewValue: '200' },
    { value: 300, viewValue: '300' }
  ];

  currencies: any[] = [
    { value: 'USD', viewValue: 'US Dollar' },
    { value: 'INR', viewValue: 'Indian Rupees' }

  ];

  public addBookForm: FormGroup;

  constructor(private _bookService: BookService, private _formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();

    // console.log(this.addBookForm.controls['title']);
    // console.log(this.addBookForm.get('title'));

    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(x => {
      this.validateTitleControl(titleControl as FormControl);
    });

    const formatTypeControl = this.addBookForm.get('formatType');
    formatTypeControl?.valueChanges.subscribe(x => {
      this.formatTypeChanged(x);
    });

  }

  public get authors() {
    return <FormArray>this.addBookForm.get('authors');
  }

  public addMoreAuthor(): void {
    this.authors.push(this.getAuthorControl());
  }

  public removeAuthor(i: number): void {
    this.authors.removeAt(i);
  }




  saveBook(): void {  
    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value).subscribe(x => {
        console.log(x);        
      });
    } else {
      alert('Form Invalid');
    }

  }


  private initForm(): void {

    this.addBookForm = this._formBuilder.group({
      title: ['This is default', [Validators.required, Validators.minLength(10)]],
      // author: '',
      totalPages: '',
      price: this._formBuilder.group({
        currency: '',
        value: ''
      }),
      publishedOn: '',
      isPublished: '',
      formatType: '',
      pdfFormat: '',
      docFormat: '',
      authors: this._formBuilder.array([this.getAuthorControl(), this.getAuthorControl()])
    });

  }

  private getAuthorControl(): FormGroup {
    return this._formBuilder.group({
      fullName: '',
      address: ''
    });

  }

  private validateTitleControl(titleControl: FormControl): void {
    this.titleErrorMessage = '';
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if (titleControl.errors?.['required']) {
        this.titleErrorMessage = 'This is a required field.'
      } else if (titleControl.errors?.['minlength']) {
        this.titleErrorMessage = 'Minimum length is ' + titleControl.errors?.['minlength']?.['requiredLength'];
      }
    }
  }

  private formatTypeChanged(formatType: string): void {

    const pdfControl = this.addBookForm.get('pdfFormat');
    const docControl = this.addBookForm.get('docFormat');

    if (formatType === 'pdf') {
      pdfControl?.addValidators(Validators.required);
      docControl?.clearValidators();
    } else if (formatType === 'doc') {
      docControl?.addValidators(Validators.required);
      pdfControl?.clearValidators();
    }

    pdfControl?.updateValueAndValidity();
    docControl?.updateValueAndValidity();
  }






}





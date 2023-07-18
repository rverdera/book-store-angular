import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // available service in the entire application
})
export class BookService {




  constructor(private _httpClient: HttpClient) { }


  public getBooks(): void {
    
  } 

  public addBook(bookModel : BookModel): void {
   
  }

}

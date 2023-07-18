import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // available service in the entire application
})
export class BookService {

  
  constructor(private _httpClient: HttpClient) { 
    
  }


  public getBooks(): Observable<BookModel[]> {
    return this._httpClient.get<BookModel[]>('https://localhost:7031/api/Books');
  } 

  public addBook(bookModel : BookModel): Observable<BookModel> {
    return this._httpClient.post<BookModel>('https://localhost:7031/api/Books', bookModel);
  }

}

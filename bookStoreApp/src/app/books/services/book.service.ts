import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root' // available service in the entire application
})
export class BookService {


  private allBooks = [
    {
      "id": 1,
      "title": "Angular Fundamentals",
      "totalPages": 453,
      "author": "Ram Singh",
      "price": {
        "currency": "INR",
        "value": 199
      }
    },
    {
      "id": 2,
      "title": "Java Fundamentals",
      "totalPages": 987,
      "author": "Kishan Pal",
      "price": {
        "currency": "USD",
        "value": 19
      }
    }
  ];

  constructor() { }


  public getBooks(): any[] {
    return this.allBooks;
  }

  public recentBooks(): any[] {
    return [
      {
        "id": 1,
        "title": "Angular Fundamentals",
        "totalPages": 453,
        "author": "Ram Singh",
        "price": {
          "currency": "INR",
          "value": 199
        }
      },
      {
        "id": 2,
        "title": "Java Fundamentals",
        "totalPages": 987,
        "author": "Kishan Pal",
        "price": {
          "currency": "USD",
          "value": 19
        }    
      }
    ]
  }

  public addBook(bookModel : BookModel): void {
    this.allBooks.push(bookModel);
  }

}

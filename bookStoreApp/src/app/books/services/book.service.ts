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
    },
    {
      "id": 3,
      "title": "The ups and downs of life",
      "totalPages": 456,
      "author": "Jay Malhotre",
      "price": {
        "currency": "INR",
        "value": 299
      }    
    },
    {
      "id": 4,
      "title": "Azure Walkthrough",
      "totalPages": 879,
      "author": "Pintu Verma",
      "price": {
        "currency": "INR",
        "value": 399
      }    
    },
    {
      "id": 5,
      "title": "Asp.Net Core Web API",
      "totalPages": 546,
      "author": "Nagesh Khatri",
      "price": {
        "currency": "USD",
        "value": 99
      }    
    },
    {
      "id": 6,
      "title": "Azure Walkthrough",
      "totalPages": 879,
      "author": "Pintu Verma",
      "price": {
        "currency": "INR",
        "value": 399
      }    
    },
    {
      "id": 7,
      "title": "Asp.Net Core Web API",
      "totalPages": 546,
      "author": "Nagesh Khatri",
      "price": {
        "currency": "USD",
        "value": 99
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

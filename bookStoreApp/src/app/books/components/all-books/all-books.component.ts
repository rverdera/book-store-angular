import { Component, OnInit } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from 'src/app/shared/services/counter.service';


@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  // providers: [BookService] -- only for this components
})
export class AllBooksComponent implements OnInit {

  private _pageTitle: string;

  public set pageTitle(value: string) {
    this._pageTitle = value;
  }

  public get pageTitle() {
    return this._pageTitle;
  }

  public books: BookModel[] = [];

  constructor(public bookService: BookService,
              public _counterService: CounterService) { }

  ngOnInit(): void {

    this.pageTitle = 'All Books';
    
    const allBooks = this.bookService.getBooks();
    allBooks.forEach(b => {
      var obj = new BookModel();
      obj.id = b.id;
      obj.author = b.author;
      obj.price = b.price;
      obj.title = b.title;
      obj.totalPages = b.totalPages;

      this.books.push(obj);

    })
    console.log(this.books);

  }

  public increase(): void {
    this._counterService.incCounter();
  }

  public decrease(): void {
    this._counterService.decCounter();
  }

}

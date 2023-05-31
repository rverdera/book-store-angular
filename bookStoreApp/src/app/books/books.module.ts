import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

import { SharedModule } from '../shared/shared.module';

// import { BookService } from './services/book.service'; -- across all module - for dependency injection


@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule
  ],
  // providers: [BookService] -- across all module
})
export class BooksModule { }

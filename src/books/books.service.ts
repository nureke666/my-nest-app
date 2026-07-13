import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BooksService {
  // Имитируем базу данных в виде массива объектов
  private books = [
    { id: '1', title: 'Книга 1', author: 'Автор 1', year: 1993 },
    { id: '2', title: 'Книга 2', author: 'Автор 2', year: 228 },
  ];

  findAll() {
    return this.books;
  }

  findOne(id: string) {
    const book = this.books.find(book => book.id === id);
    if(!book) throw new NotFoundException(`Book with ID: ${id}, not found`);
    return book;
  }

  createBook(dto: CreateBookDto) {
    const newBook = {
      id: String(Math.floor(Math.random() * 1000000)),
      ...dto, // Используем spread-оператор для развертывания полей DTO
    };

    this.books.push(newBook);
    return newBook;
  }

  deleteBook(id: string) {
    const bookToDelete = this.findOne(id);
    this.books = this.books.filter(book => book.id !== id);
    return bookToDelete;
  }
}

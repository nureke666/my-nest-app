import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service'; // Импортируем сервис

@Controller('books')
export class BooksController {
  // Внедряем BooksService через конструктор.
  // Ключевое слово private автоматически создает свойство класса 'booksService'
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getBooks() {
    // Вызываем метод сервиса
    return this.booksService.findAll();
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    // Вызываем метод сервиса
    return this.booksService.findOne(id);
  }

  @Post()
  create(@Body() body: { title: string; author: string }) {
    return this.booksService.createBook(body.title, body.author);
  }
}

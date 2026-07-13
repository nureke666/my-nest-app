import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { BooksService } from './books.service'; 
import { CreateBookDto } from './create-book.dto';

@Controller('books')
export class BooksController {
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
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.createBook(createBookDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
  }
}

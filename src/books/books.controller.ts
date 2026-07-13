import { Controller, Get, Param } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get()
  getBooks() {
    return ['Книга 1', 'Книга 2'];
  }

  @Get(':id')
  getBookById(@Param('id') id: string) {
    return `Asked book with id ${id}`;
  }
}

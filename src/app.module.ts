import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { BooksController } from './books/books.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, BooksController],
  providers: [AppService],
})
export class AppModule {}

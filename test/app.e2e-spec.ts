import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/books (POST) - fails validation when body is empty', () => {
    return request(app.getHttpServer())
      .post('/books')
      .send({})
      .expect(400);
  });

  it('/books (POST) - succeeds when body is valid', () => {
    return request(app.getHttpServer())
      .post('/books')
      .send({ title: 'New Book', author: 'Author Name' })
      .expect(201);
  });

  afterEach(async () => {
    await app.close();
  });
});

import { IsString, IsNotEmpty, IsInt, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsString({ message: 'Название должно быть строкой' })
  @IsNotEmpty({ message: 'Название не должно быть пустым' })
  title!: string;

  @IsString({ message: 'Имя автора должно быть строкой' })
  @IsNotEmpty({ message: 'Имя автора не должно быть пустым' })
  author!: string;

  @IsInt({ message: 'Год должен быть числом и целым' })
  year!: number;
}
import { IsNotEmpty, Length } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @Length(3)
  title: string;

  image: string; // todo: should be a file later

  @IsNotEmpty()
  authors: string[];

  @IsNotEmpty()
  price: number;
}

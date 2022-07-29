import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from '../services/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BookService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createBookDto: CreateBookDto) {
    return this.prismaService.book.create({
      data: {
        title: createBookDto.title,
        image: createBookDto.image,
        authors: createBookDto.authors,
        price: createBookDto.price,
      },
    });
  }

  findAll() {
    return this.prismaService.book.findMany();
  }

  findOne(where: Prisma.BookWhereUniqueInput) {
    return this.prismaService.book.findUnique({ where });
  }

  update(where: Prisma.BookWhereUniqueInput, data: Prisma.BookUpdateInput) {
    return this.prismaService.book.update({ where, data });
  }

  remove(where: Prisma.BookWhereUniqueInput) {
    return this.prismaService.book.delete({ where });
  }
}

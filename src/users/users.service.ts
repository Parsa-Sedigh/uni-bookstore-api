import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'parsa',
      password: '123456',
    },
  ];

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}

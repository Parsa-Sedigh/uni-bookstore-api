import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { BookModule } from "./book/book.module";

@Module({
  imports: [BookModule, AuthModule]
})
export class AppModule {}
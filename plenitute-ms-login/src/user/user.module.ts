import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "backend",
        transport: Transport.TCP,
      },
    ])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }

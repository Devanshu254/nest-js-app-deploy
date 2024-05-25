import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersStore } from './users.store';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [{provide: UsersStore, useClass: UsersStore}],
  // within providers first argument we have given is injection token, means what is the name which we needs to give it. We will give the name UsersStore. 
  // Another is UsersStore means what is the class we are using.
})
export class AppModule {}

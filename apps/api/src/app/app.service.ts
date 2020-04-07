import { Injectable } from '@nestjs/common';
import { Message } from '@nx-todo-app/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}

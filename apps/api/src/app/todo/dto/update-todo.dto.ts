import { IsNotEmpty } from 'class-validator';
import { Todo } from '@nx-todo-app/api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto implements Todo {
  @ApiProperty()
  @IsNotEmpty()
  date: Date;

  @ApiProperty()
  @IsNotEmpty()
  label: string;

  @ApiProperty()
  @IsNotEmpty()
  tag: string;
}
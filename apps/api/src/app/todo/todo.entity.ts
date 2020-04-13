import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from '@nx-todo-app/api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class TodoEntity implements Todo {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  date: Date;

  @ApiProperty()
  @Column()
  label: string;

  @ApiProperty()
  @Column()
  tag: string;
}

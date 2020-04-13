import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity } from './todo.entity';
import { DeleteResult } from 'typeorm';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiResponse({ type: [TodoEntity] })
  @Get()
  async readAll(): Promise<TodoEntity[]> {
    return this.todoService.readAll();
  }

  @ApiResponse({ type: TodoEntity })
  @Get(':id')
  async read(@Param('id') id: string): Promise<TodoEntity> {
    return await this.todoService.read(id);
  }

  @ApiBody({ type: UpdateTodoDto })
  @ApiResponse({ type: TodoEntity })
  @Put(':id')
  async update(@Param('id') id: string, @Body() todoDto: UpdateTodoDto): Promise<TodoEntity> {
    return await this.todoService.update(id, todoDto);
  }

  @ApiBody({ type: CreateTodoDto })
  @ApiResponse({ type: TodoEntity })
  @Post()
  async create(@Body() todoDto: CreateTodoDto): Promise<TodoEntity> {
    return this.todoService.create(todoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.todoService.delete(id);
  }
}

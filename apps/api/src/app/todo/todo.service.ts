import { TodoEntity } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoEntityRepository: Repository<TodoEntity>,
  ) {}

  async readAll(): Promise<TodoEntity[]> {
    return await this.todoEntityRepository.find();
  }

  async read(id: string): Promise<TodoEntity> {
    return await this.todoEntityRepository.findOne(id);
  }

  async create(todoDto: CreateTodoDto): Promise<TodoEntity> {
    let todo = new TodoEntity();
    todo = Object.assign(todo, todoDto);
    return await this.todoEntityRepository.save(todo);
  }

  async update(id: string, todoDto: UpdateTodoDto): Promise<TodoEntity> {
    let todo = await this.read(id);
    todo = Object.assign(todo, todoDto);
    return await this.todoEntityRepository.save(todo);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.todoEntityRepository.delete(id);
  }
}

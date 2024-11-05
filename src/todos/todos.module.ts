import { Module } from '@nestjs/common';
import { TodosController } from './controller/todos/todos.controller';
import { TodosService } from './services/todos/todos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todos, TodosSchema } from './schema/todos.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: Todos.name,
      schema: TodosSchema
    }
  ])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule { }

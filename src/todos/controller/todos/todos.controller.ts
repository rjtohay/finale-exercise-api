import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Todos } from 'src/todos/schema/todos.schema';
import { TodosService } from 'src/todos/services/todos/todos.service';

@Controller('todos')
export class TodosController {
    constructor(
        private readonly todosService: TodosService
    ) { }

    @Post()
    create(@Body() todo: Partial<Todos>) {
        return this.todosService.create(todo);
    }

    @Get()
    findAll() {
        return this.todosService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string) {
        return this.todosService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() todo: Partial<Todos>) {
        return this.todosService.update(id, todo);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.todosService.delete(id);
    }
}

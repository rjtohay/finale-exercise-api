import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todos } from 'src/todos/schema/todos.schema';

@Injectable()
export class TodosService {
    constructor(
        @InjectModel(Todos.name) private todosModel: Model<Todos>
    ) { }

    async create(todo: Partial<Todos>): Promise<Todos> {
        return new this.todosModel(todo).save();
    }

    async findAll(): Promise<Todos[]> {
        return this.todosModel.find({ isDeleted: false }).exec();
    }

    async findById(id: string): Promise<Todos> {
        return this.todosModel.findOne({ _id: id, isDeleted: false }).exec();
    }

    async update(id: string, todo: Partial<Todos>): Promise<Todos> {
        return this.todosModel.findByIdAndUpdate(id, todo, { new: true }).exec();
    }

    async delete(id: string): Promise<Todos> {
        return this.todosModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true }).exec();
    }
}

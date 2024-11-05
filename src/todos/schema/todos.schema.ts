import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: 'todos' })
export class Todos extends Document {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop({ default: false })
    completed: boolean;

    @Prop({ default: false })
    isDeleted: boolean;
}

export const TodosSchema = SchemaFactory.createForClass(Todos);
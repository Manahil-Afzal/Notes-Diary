import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Note {
  @Prop({ required: true })
  text!: string;

  @Prop({ required: false })
  color?: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);




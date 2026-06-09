import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Note } from './notes.schema';
import { CreateNoteDto } from './notes.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel(Note.name) private readonly noteModel: Model<Note>,
  ) {}

  async create(dto: CreateNoteDto) {
    const created = new this.noteModel({
      text: dto.text,
      color: dto.color,
    });
    const saved = await created.save();

    // timestamps are available at runtime, but not strictly typed here.
    return {
      id: (saved as any)._id,
      text: saved.text,
      color: saved.color,
      createdAt: (saved as any).createdAt,
      updatedAt: (saved as any).updatedAt,
    };
  }

  async deleteById(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      return { deleted: false };
    }

    const res = await this.noteModel.deleteOne({ _id: id }).exec();
    return { deleted: res.deletedCount === 1 };
  }
}



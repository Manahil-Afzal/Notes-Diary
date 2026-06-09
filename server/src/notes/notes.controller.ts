import { Body, Controller, Delete, Param, Post, BadRequestException } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './notes.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async save(@Body() dto: CreateNoteDto) {
    if (!dto?.text?.trim()) {
      throw new BadRequestException('text is required');
    }
    return this.notesService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.notesService.deleteById(id);
  }
}



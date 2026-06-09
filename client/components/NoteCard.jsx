"use client";

import { Trash2 } from "lucide-react";

export default function NoteCard({ note, onChangeText, onSave, onDelete }) {
  return (
    <div
  className="w-full md:w-[400px] h-[270px] rounded-[28px] p-6 shadow-xl flex flex-col"
  style={{ backgroundColor: note.color }}
>
      {/* TEXT AREA */}
      <textarea
        value={note.text}
        onChange={(e) => onChangeText(note.id, e.target.value)}
        placeholder="Write your note..."
        className="
            flex-1
            w-full
            bg-transparent
            outline-none
            resize-none
            text-lg
            leading-relaxed
          "
      />

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-3">
        <p className="text-sm opacity-70">
          {note.createdAt
            ? new Date(note.createdAt).toLocaleDateString()
            : new Date().toLocaleDateString()}
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onSave(note.id)}
            className="bg-black text-white px-16 py-14 rounded-full text-base hover:opacity-90 transition min-w-[70px]"
          >
            Save
          </button>

          <button
            type="button"
            aria-label="Delete note"
            onClick={() => onDelete(note.id)}
            className="w-12 h-12 rounded-full bg-black flex items-center justify-center cursor-pointer hover:scale-105 transition"
          >
            <Trash2 color="white" size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}

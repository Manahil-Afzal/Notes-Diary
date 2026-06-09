"use client";

import { useState } from "react";

import Sidebar from "../components/Sidebar";
import NoteCard from "../components/NoteCard";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [showColors, setShowColors] = useState(true);

  const createNote = (color) => {
    const newNote = {
      id: crypto.randomUUID(),
      color,
      text: "",
      createdAt: new Date().toISOString(),
    };

    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <main className="flex flex-col md:flex-row min-h-screen">
      <Sidebar
        onPickColor={createNote}
        showColors={showColors}
        setShowColors={setShowColors}
      />

      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex flex-wrap gap-6 items-start">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onChangeText={(id, text) => {
                setNotes((prev) =>
                  prev.map((n) =>
                    n.id === id ? { ...n, text } : n
                  )
                );
              }}
              onDelete={(id) => {
                setNotes((prev) =>
                  prev.filter((n) => n.id !== id)
                );
              }}
              onSave={() => {}}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
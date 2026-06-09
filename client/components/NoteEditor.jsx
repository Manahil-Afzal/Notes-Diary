import { Trash2 } from "lucide-react";

export default function NoteEditor({
  selectedColor,
  text,
  setText,
}) {
  return (
    <div className="flex-1 flex items-start justify-start p-2 md:p-6 md:pl-10">
      <div
        className="w-[400px] h-[270px] rounded-[28px] p-6 shadow-xl flex flex-col"
        style={{ backgroundColor: selectedColor }}
      >
        {/* TEXT AREA */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
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
            {new Date().toLocaleDateString()}
          </p>

          <div className="flex items-center gap-3">
            <button
              className="bg-black text-white px-16 py-14 rounded-full text-base hover:opacity-90 transition min-w-[70px]"
            >
              Save
            </button>
            

            <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center cursor-pointer hover:scale-105 transition">
              <Trash2 color="white" size={23} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

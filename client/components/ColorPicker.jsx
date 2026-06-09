import { colors } from "../data/colors";

export default function ColorPicker({ onPickColor }) {
  return (
    <div className="flex flex-wrap md:flex-col gap-2">
      {colors.map((color, index) => (
        <div
          key={index}
          onClick={() => {
            if (typeof onPickColor === "function") {
              onPickColor(color);
            }
          }}
          className="w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer shrink-0"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
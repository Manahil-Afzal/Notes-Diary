"use client";

import { X, Plus } from "lucide-react";
import ColorPicker from "./ColorPicker";

export default function Sidebar({
  onPickColor,
  showColors,
  setShowColors,
}) {
  return (
    <div className="flex flex-col items-center pt-4 md:pt-20 gap-4 md:gap-8 w-full md:w-[190px] border-b md:border-b-0 md:border-r border-gray-400 px-4 md:px-0 md:h-screen md:overflow-y-auto">
      
      {/* Desktop Title */}
      <h1 className="hidden md:block text-[28px] font-bold">
        Notes
      </h1>

      {/* Mobile Layout */}
      <div className="flex md:hidden items-center gap-3 w-full">
        <button
          onClick={() => setShowColors(!showColors)}
          className="w-14 h-14 rounded-full bg-black flex items-center justify-center shrink-0"
        >
          {showColors ? (
            <X color="white" size={32} strokeWidth={3.5} />
          ) : (
            <Plus color="white" size={32} strokeWidth={3.5} />
          )}
        </button>

        {showColors && (
          <div className="flex-1">
            <ColorPicker onPickColor={onPickColor} />
          </div>
        )}
      </div>

      {/* Desktop Button */}
      <button
        onClick={() => setShowColors(!showColors)}
        className="hidden md:flex w-16 h-16 rounded-full bg-black items-center justify-center"
      >
        {showColors ? (
          <X color="white" size={42} strokeWidth={3.5} />
        ) : (
          <Plus color="white" size={42} strokeWidth={3.5} />
        )}
      </button>

      {/* Desktop Colors */}
      {showColors && (
        <div className="hidden md:flex flex-col items-center">
          <ColorPicker onPickColor={onPickColor} />
        </div>
      )}
    </div>
  );
}
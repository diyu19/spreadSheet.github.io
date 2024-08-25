"use client";

import { useStore } from './spread/Spreadsheet';

export default function Home() {
  const { cells, updateCell }: any = useStore(); // Zustand state for cells

  return (
    <div className="grid grid-cols-10 gap-px">
      {cells.map((cell:any, index:any) => (
        <Cell key={index} value={cell.value} onChange={(newValue :any) => updateCell(index, newValue)} />
      ))}
    </div>
  );
}

function Cell({ value, onChange }:any) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 p-2 text-center"
    />
  );
}

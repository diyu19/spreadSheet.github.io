import create from 'zustand';

export const useStore = create((set) => ({
  cells: Array(100 * 100).fill({ value: '' }),  // 250,000 cells
  updateCell: (index:any, newValue:any) => set((state:any) => {
    const newCells = [...state.cells];
    newCells[index] = { value: newValue };
    return { cells: newCells };
  }),
}));

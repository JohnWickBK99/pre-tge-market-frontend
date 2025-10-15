import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

/**
 * Example store interface
 */
interface ExampleState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

/**
 * Example Zustand store
 * This is a template for creating stores in the application
 */
export const useExampleStore = create<ExampleState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
      }),
      {
        name: 'example-storage',
      }
    ),
    {
      name: 'ExampleStore',
    }
  )
);

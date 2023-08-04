import {create} from 'zustand';
import {StateStorage, createJSONStorage, persist} from 'zustand/middleware';
import {mmkvStorage} from '../utils/mmkvconfig';

const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return mmkvStorage.set(name, value);
  },
  getItem: name => {
    const value = mmkvStorage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return mmkvStorage.delete(name);
  },
};

interface BearState {
  bears: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
}

export const useBearStore = create<BearState>()(
  persist(
    set => ({
      bears: 0,
      increase: by => set(state => ({bears: state.bears + by})),
      decrease: by => set(state => ({bears: state.bears - by})),
    }),
    {
      name: 'zustand-mmkv-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

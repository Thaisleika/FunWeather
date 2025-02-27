import { create } from "zustand";

export const useWeatherStore = create((set) => ({
  weather: null,
  favorites: [],
  setWeather: (data) => set({ weather: data }),
  addFavorite: (city) =>
    set((state) => ({
      favorites: state.favorites.includes(city) ? state.favorites : [...state.favorites, city],
    })),
}));

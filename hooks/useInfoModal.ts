import { create } from "zustand";

export interface InfoModalStore {
    movieId?: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

const useInfoModal = create<InfoModalStore>(set => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId: string) => set({ isOpen: true, movieId: movieId }),
    closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;

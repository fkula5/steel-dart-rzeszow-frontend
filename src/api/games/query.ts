import { useQuery } from '@tanstack/vue-query';
import { fetchGame, fetchGames } from './game';

export const useGetGames = () => {
    return useQuery(['games'], () => fetchGames());
};

export const useGetGame = (gameId: string) => {
    return useQuery(['game-info', gameId], () => fetchGame(gameId));
};

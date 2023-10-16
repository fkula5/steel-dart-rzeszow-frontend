import { useQuery } from '@tanstack/vue-query';
import { fetchGames } from './game';

export const useGetGames = () => {
    return useQuery(['games'], () => fetchGames());
};

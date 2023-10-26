import { useQuery } from '@tanstack/vue-query';
import { fetchGames, fetchRecentGamesByLeague } from './game';

export const useGetGames = () => {
    return useQuery(['games'], () => fetchGames());
};

export const useGetRecentGamesByLeague = (leagueId: string) => {
    return useQuery(['recent-league-games', leagueId], () => fetchRecentGamesByLeague(leagueId));
};

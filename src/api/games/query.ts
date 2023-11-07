import { useQuery } from '@tanstack/vue-query';
import { fetchGame, fetchGames, fetchGamesByLeague, fetchRecentGamesByLeague } from './game';

export const useGetGames = () => {
    return useQuery(['games'], () => fetchGames());
};

export const useGetGame = (gameId: string) => {
    return useQuery(['game-info', gameId], () => fetchGame(gameId));
};

export const useGetRecentGamesByLeague = (leagueId) => {
    return useQuery(['recent-league-games', leagueId], () =>
        fetchRecentGamesByLeague(leagueId.value)
    );
};

export const useGetGamesByLeague = (leagueId) => {
    console.log(leagueId);
    return useQuery(['league-games', leagueId], () => fetchGamesByLeague(leagueId));
};

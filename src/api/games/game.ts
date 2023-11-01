import { $axiosInstance } from '@/plugins/axios';

export const fetchGames = () => {
    return $axiosInstance.get<unknown>('/games');
};

export const fetchGame = (gameId: string) => {
    return $axiosInstance.get<unknown>(`/games/${gameId}`);
};

export const fetchRecentGamesByLeague = (leagueId: Number) => {
    return $axiosInstance.get<unknown>(`/recentLeagueGames/${leagueId}`);
};

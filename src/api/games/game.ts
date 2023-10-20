import { $axiosInstance } from '@/plugins/axios';

export const fetchGames = () => {
    return $axiosInstance.get<unknown>('/games');
};

export const fetchRecentGamesByLeague = (leagueId: string) => {
    return $axiosInstance.get<unknown>(`/recentLeagueGames/${leagueId}`);
};

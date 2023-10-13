import { $axiosInstance } from '@/plugins/axios';

export const fetchPlayerInfo = (playerId: string) => {
    return $axiosInstance.get<unknown>(`/players/${playerId}`);
};

export const fetchLeaguePlayers = (leagueId: string) =>{
    return $axiosInstance.get<unknown>(`/leagues/${leagueId}/players`)
}
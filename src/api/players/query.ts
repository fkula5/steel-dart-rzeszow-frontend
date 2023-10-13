import { useQuery } from '@tanstack/vue-query';
import { fetchLeaguePlayers, fetchPlayerInfo } from './player';

export const useGetPlayerInfo = (playerId: string) => {
    return useQuery(['player-info', playerId], () => fetchPlayerInfo(playerId));
};

export const useGetLeaguePlayers = (leagueId: string) => {
    return useQuery(['league-players', leagueId], () => fetchLeaguePlayers(leagueId));
};

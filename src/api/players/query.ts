import { useQuery } from '@tanstack/vue-query';
import { fetchPlayerInfo } from './player';

export const useGetPlayerInfo = (playerId: string) => {
    return useQuery(['player-info', playerId], () => fetchPlayerInfo(playerId));
};

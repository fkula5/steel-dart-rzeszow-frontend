import { axiosInstance } from '@/plugins/axios';

export const fetchPlayerInfo = (playerId: string) => {
    return axiosInstance.get<unknown>(`/players/${playerId}`);
};

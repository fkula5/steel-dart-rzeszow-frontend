import { $axiosInstance } from '@/plugins/axios';

export const fetchGames = () => {
    return $axiosInstance.get<unknown>('/games');
};

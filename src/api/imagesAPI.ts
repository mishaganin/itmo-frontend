import { api } from './configs/axiosConfigs.ts';

export const ImagesAPI = {
  getAll: async () => {
    const response = await api.request({
      url: '/search/photos',
      method: 'GET',
      params: {
        query: 'coding',
        orientation: 'landscape',
      },
    });

    return response.data.results;
  },
};

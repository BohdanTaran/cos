import axiosInstance from '../../utils/axios/axiosInstance';
import { IAdvertisement } from './advertisements.types';

export const getAdvertisements = async (): Promise<IAdvertisement[]> => {
  const { data } = await axiosInstance.get('/ads/all');
  return data;
};

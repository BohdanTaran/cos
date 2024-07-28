import { useEffect, useState } from 'react';
import axiosInstance from '../../../../../../utils/axios/axiosInstance';
import { IAdvertisement } from '../types';

export const useAdvertisements = () => {
  const [advertisements, setAdvertisements] = useState<IAdvertisement[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get('/ads/all'); // move all api requests to a separate file (api folder)
        setAdvertisements(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          throw error;
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchAds(); // try IIFE
  }, []);

  // this should be in useEffect hook, errror as a dependency
  if (error) {
    console.error('Error:', error);
  }

  return { advertisements, isLoading };
};

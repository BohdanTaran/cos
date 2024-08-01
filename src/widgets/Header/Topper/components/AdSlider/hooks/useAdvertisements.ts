import { useEffect, useState } from 'react';
import { getAdvertisements, IAdvertisement } from '../../../../../../api'

export const useAdvertisements = () => {
  const [advertisements, setAdvertisements] = useState<IAdvertisement[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        setIsLoading(true);
        const ads = await getAdvertisements();
        setAdvertisements(ads);
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

    fetchAds();

    if (error) {
      console.error('Error:', error);
    }
  }, [error]);

  return { advertisements, isLoading };
};

import { useMediaQuery } from 'react-responsive';

interface UseIsDeviceProps {
  query: string;
}

const useIsDevice = ({ query }: UseIsDeviceProps) => {
  const isDevice = useMediaQuery({ query });
  return isDevice;
};

export default useIsDevice;

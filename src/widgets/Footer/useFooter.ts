import { useContext } from 'react';
import {
  MediaQueryContext,
  MediaQueryContextType,
} from '../../contexts/MediaQueryContext';

export const useFooter = (): MediaQueryContextType => {
  const context = useContext(MediaQueryContext);
  if (context === undefined) {
    throw new Error('');
  }
  return context;
};

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const ActionBar = ({ children }: Props) => {
  return <>{children}</>;
};

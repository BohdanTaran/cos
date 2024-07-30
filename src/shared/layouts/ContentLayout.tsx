import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
	isRelative?: boolean;
}

const ContentLayout = ({ children, isRelative }: Props) => {
  return (
    <div className={`${isRelative && 'relative'} w-full h-full flex justify-center`}>
      <div className="w-11/12">{children}</div>
    </div>
  );
};
export default ContentLayout;

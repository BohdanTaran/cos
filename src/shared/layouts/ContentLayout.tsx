import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ContentLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full px-5 py-6 laptop:px-[72px]">{children}</div>
    </div>
  );
};
export default ContentLayout;

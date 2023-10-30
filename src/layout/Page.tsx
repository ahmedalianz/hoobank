import {FC, ReactNode} from 'react';
interface PageProps {
  children: ReactNode;
}
const Page: FC<PageProps> = ({children}) => {
  return <div className="bg-primary w-full overflow-hidden">{children}</div>;
};

export default Page;

import {FC} from 'react';
import {arrowUp} from '../assets';
interface GetStartedProps {}
const GetStarted: FC<GetStartedProps> = () => {
  return (
    <div className="bg-blue-gradient rounded-full p-[2px] w-[140px] h-[140px] cursor-pointer flex justify-center items-center">
      <div className="bg-primary rounded-full w-[100%] h-[100%] flex flex-col justify-center items-center">
        <div className="flex justify-center items-start">
          <p className="flex justify-start font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
            <br className="sm:block hidden" />
            <img
              src={arrowUp}
              alt="arrow up"
              className="w-[23px] h-[23px] object-contain"
            />
          </p>
        </div>
        <p className=" font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;

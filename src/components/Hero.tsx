import {FC} from 'react';
import {discount, robot} from '../assets';
import {GetStarted} from '../atoms';
import {styles} from '../constants';
interface HeroProps {}
const Hero: FC<HeroProps> = () => {
  return (
    <div className={`${styles.flexStart} ${styles.boxWidth}`}>
      <section id="home" className="flex flex-col md:flex-row sm:py-16 py6">
        <div className="flex-1 flex justify-center items:center ss:items-start flex-col xl:px-0 sm:px-16 px-6">
          <div className="py-[6px] px-4 mb-2 rounded-[10px] flex ss:justify-start justify-center items-center bg-discount-gradient">
            <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
            <p className="font-poppins font-normal text-dimWhite text-xl leading-[30.8px] ml-2 text-center ss:text-start">
              <span className="text-white">20% </span>Discount For
              <span className="text-white"> 1 Month</span> Account
            </p>
          </div>
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-center ss:text-start">
              The Next <br className="sm:block hidden" />{' '}
              <span className="text-gradient">Generation</span>{' '}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div>
          </div>
          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full text-center ss:text-start">
            Payment Method.
          </h1>
          <p className="max-w-[470px] font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 text-center ss:text-start">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
        <div
          className={`flex-1 flex justify-center items-center md:my-0 my-10 relative`}>
          <img
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>

        <div className="ss:hidden flex justify-center items-center">
          <GetStarted />
        </div>
      </section>
    </div>
  );
};
export default Hero;

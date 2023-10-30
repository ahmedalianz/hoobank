import {FC} from 'react';
interface ButtonProps {
  style?: string;
}
const Button: FC<ButtonProps> = ({style}) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${style}`}>
      Get Started
    </button>
  );
};

export default Button;

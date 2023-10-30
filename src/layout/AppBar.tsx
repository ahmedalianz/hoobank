import {FC, useState} from 'react';
import {linkTitle, navLinks} from '../constants';
import {close, logo, menu} from '../assets';
interface AppBarProps {}
const AppBar: FC<AppBarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<linkTitle>('Home');
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };
  return (
    <div className="sm:px-16 px-6 flex justify-center items-center xl:max-w-[1280] w-full">
      <nav className="navbar flex justify-between items-center w-full py-6">
        <img src={logo} alt="hoo-bank" className="w-[124px] h-[32px]" />
        <ul className="list-none sm:flex hidden flex-1 justify-end items-center">
          {navLinks.map((navLink, index) => (
            <li
              key={navLink.id}
              className={`font-poppins font-normal text-[16px] cursor-pointer text-white ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
              }`}>
              <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            onClick={toggleMenu}
            src={isMenuOpen ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
          />
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } bg-black-gradient p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((navLink, index) => (
                <li
                  key={navLink.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    activeLink === navLink.title
                      ? 'text-white'
                      : 'text-dimWhite'
                  } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                  onClick={() => setActiveLink(navLink.title)}>
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default AppBar;

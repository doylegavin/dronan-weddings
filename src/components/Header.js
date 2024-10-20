import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { navigation } from '../indexCopy.js';
import { HamburgerMenu } from './HamburgerMenu.js';
import Button from "./Button.jsx";
import MenuSvg from './MenuSvg.jsx';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Header = ({ openNavigation, setOpenNavigation }) => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track scrolling past video
  const pathname = useLocation();
  const lastScrollPosition = useRef(0);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
      // Restore the last scroll position
      setTimeout(() => {
        window.scrollTo(0, lastScrollPosition.current);
      }, 0);
    } else {
      // Save the current scroll position
      lastScrollPosition.current = window.pageYOffset;
      setOpenNavigation(true);
      disablePageScroll();
      // Scroll to the top of the page
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    // Clean up function to re-enable scrolling when component unmounts
    return () => {
      enablePageScroll();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const videoHeight = document.querySelector('header').offsetHeight; // Get the height of the video section
      setIsScrolled(window.scrollY > videoHeight); // Change state when scrolled past the video
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup listener
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 bg-white shadow-xl  ${openNavigation ? 'bg-transparent' : ' '}`}>
     {/*      transition-colors duration-300 ${isScrolled ? 'bg-white text-black shadow-lg' : ' backdrop-blur-sm text-white'}`}>
 */}
     
      <div className="flex items-center px-5 px-7.5 xl:px-10 ">
        <a className="block w-[8rem] xl:mr-8" href='home'>
          <img src="/Media/dronan_media_logo_copy.svg" alt="DronanMediaLogo" className="" />
        </a>
                <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[8rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                  <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row pt-4">
                    {navigation.map((item) => (
                      <a
                        key={item.id}
                        href={item.url}
                        className={`block relative text-2xl uppercase transition-colors 
                               hover:bg-olivine-200 hover:shadow-lg 
                             text-olivine-950 hover:text-white text-opacity-50 
                             ${openNavigation ? 'bg-white hover:bg-olivine-200 hover:text-white py-4' : ''}
                         ${
                          item.onlyMobile ? 'lg:hidden' : ''
                        } px-6 py-4 md:py-6 my-2 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                          item.url === pathname.hash ? 'z-2 ' : ''
                        } lg:leading-5 xl:px-12 rounded-md`}
                      >
                        {item.title}
                      </a>
                    ))}

                    {/*   {navigation.map((item) => (
                              <div key={item.id} className="px-6 py-6 md:py-6 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12 rounded-md">
                                {item.url.startsWith('#') ? (
                                  <a
                                    href={item.url}
                                    className={`block relative text-2xl uppercase transition-colors ${
                                      isScrolled
                                        ? 'bg-olivine-500 text-white hover:bg-olivine-700 hover:text-olivine-950'
                                        : 'text-white text-opacity-50 hover:bg-white hover:text-olivine-950'
                                    } ${item.onlyMobile ? 'lg:hidden' : ''} ${
                                      item.url === pathname.hash ? 'z-2' : ''
                                    }`}
                                  >
                                    {item.title}
                                  </a>
                                ) : (
                                  <Link
                                    to={item.url}
                                    className={`block relative text-2xl uppercase transition-colors ${
                                      isScrolled
                                        ? 'bg-olivine-500 text-white hover:bg-olivine-700 hover:text-olivine-950'
                                        : 'text-white text-opacity-50 hover:bg-white hover:text-olivine-950'
                                    } ${item.onlyMobile ? 'lg:hidden' : ''} ${
                                      item.url === pathname.hash ? 'z-2' : ''
                                    }`}
                                  >
                                    {item.title}
                                  </Link>
                                )}
                              </div>
                            ))}
                    ))} */}
          </div>
          <HamburgerMenu />
        </nav>
      
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
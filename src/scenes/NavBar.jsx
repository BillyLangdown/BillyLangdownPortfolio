import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; 

const Link = ({ page, selectedPage, setSelectedPage, closeMenu }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      }
      inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-brightOrange before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100
      `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        closeMenu(); 
      }}
    >
      {page}
    </AnchorLink>
  );
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const navBarBackground = isTopOfPage ? "" : "bg-red";

  const closeMenu = () => {
    setIsMenuToggled(false); 
  };

  return (
    <nav className={`${navBarBackground} z-40 w-full top-0 py-6`}>
      <div className="flex items-center justify-between w-98 px-6">
        <h4 className="font-playFair text-3xl font-bold">BL</h4>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-openSans text-sm font-semibold">
            <Link
              page={"Home"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page={"Work"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page={"Skills"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />

            <Link
              page={"Contact"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
          </div>
        ) : (
          <button className="text-2xl" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <FontAwesomeIcon icon={isMenuToggled ? faTimes : faBars} />
          </button>
        )}
      </div>

      {/* mobile pop up */}
      {!isAboveSmallScreens && (
        <motion.div
          className={`fixed right-0 bottom-0 h-full bg-gradient-to-b from-darkBrown to-deepGreen w-[250px]`}
          initial={{ x: "100%" }}
          animate={{ x: isMenuToggled ? 0 : "100%" }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          {/* close button */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* menu items */}
          <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
            <Link
              page={"Home"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page={"Work"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page={"Skills"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
    
            <Link
              page={"Contact"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;

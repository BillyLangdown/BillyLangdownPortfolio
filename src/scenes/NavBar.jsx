import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
        className={`${
            selectedPage === lowerCasePage ? "text-yellow" : ""
        }
        inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-brightOrange before:rounded-full before:opacity-0 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100
        `}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        >
      {page}
    </AnchorLink>
  );
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
    const navBarBackground = isTopOfPage ? "" : "bg-red"

  return (
    <nav className={`${navBarBackground}z-40 w-full  top-0 py-6`}>
    <div className="flex items-center  justify-between w-98 px-6">
      <h4 className="font-playFair text-3xl font-bold">BL</h4>
      {isAboveSmallScreens ? (
        <div className="flex justify-between gap-16 font-openSans text-sm font-semibold">
          <Link
            page={"Home"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
                    <Link
            page={"Work"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
                    <Link
            page={"Skills"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
                    <Link
            page={"About"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
                    <Link
            page={"Contact"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      ) : (
        <button className="w-9 h-9  rounded-full bg-red" onClick={()=> setIsMenuToggled(!isMenuToggled)}><FontAwesomeIcon icon={faBars} /></button>
      )}
    </div>

    {/* mobile pop up  */}

      {!isAboveSmallScreens && isMenuToggled && ( 
        <div className="fixed right-0 bottom-0 h-full bg-blue w-[250px]">
            {/* close button  */}

            <div className="flex justify-end p-12">
                <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                <FontAwesomeIcon icon={faBars} />

                </button>
            </div>

    {/* menu items */}

    <div className=" flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
    <Link
            page={"Home"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
                    <Link
            page={"Work"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
                    <Link
            page={"Skills"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
                    <Link
            page={"About"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
                    <Link
            page={"Contact"}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />


    </div>
        </div>

)}

  </nav>
  
  );
};

export default NavBar;

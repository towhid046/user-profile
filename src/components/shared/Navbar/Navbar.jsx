import logo from "../../../assets/images/logo.svg";
import searchIcon from "../../../assets/images/navbar/search.svg";
import penIcon from "../../../assets/images/navbar/pen.svg";
import mailIcon from "../../../assets/images/navbar/mail.svg";
import threeDotsIcon from "../../../assets/images/navbar/three-dots.svg";
import userProfileIcon from "../../../assets/images/navbar/user-profile.svg";

import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const icons = [
  { id: 1, img: searchIcon, title: "Search" },
  { id: 2, img: penIcon, title: "Edit" },
  { id: 3, img: mailIcon, title: "Mail" },
  { id: 4, img: threeDotsIcon, title: "More" },
  { id: 5, img: userProfileIcon, title: "User Profile" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-[#1B1C1E] py-5 w-full z-10 sticky top-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <img className="cursor-pointer" src={logo} alt="Logo" />
        </div>
        <ul className="md:flex gap-4 items-center hidden">
          {icons?.map((icon) => (
            <li
              className={`${
                icon !== userProfileIcon &&
                "bg-[#2B2B2B] w-10 h-10 rounded-full p-1"
              } flex items-center justify-center cursor-pointer`}
              key={icon.id}
            >
              <img
                src={icon.img}
                alt="Icon"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={icon.title}
              />
            </li>
          ))}
        </ul>

        {/* for mobile devices */}
        <div className="md:hidden flex items-center gap-6">
          <img src={userProfileIcon} alt="Icon" />
          <button
            className="text-white bg-[#2B2B2B] w-10 h-10 rounded-full p-1 flex items-center justify-center text-2xl"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {toggle && (
          <ul className="absolute right-4 md:hidden top-24 bg-[#1B1C1E] py-5 rounded-lg ">
            {icons?.map((icon) => (
              <li
                key={icon.id}
                className={`${
                  icon.img === userProfileIcon && "hidden"
                } cursor-pointer flex items-center justify-between hover:bg-[#2B2B2B] px-8 py-2 rounded-lg gap-6 transition duration-300`}
              >
                <p className="text-white">{icon.title}</p>
                <img className="w-4" src={icon.img} alt="Icon" />
              </li>
            ))}
          </ul>
        )}
      </div>

      <Tooltip id="my-tooltip" />
    </nav>
  );
};

export default Navbar;

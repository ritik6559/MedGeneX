import React, { useCallback, useState } from "react";
import { menu, search } from "../assets";
import { CustomButton } from "./CustomButton";
import { usePrivy } from "@privy-io/react-auth";
import { IconHeartHandshake } from "@tabler/icons-react";
import { navlinks } from "../constants";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate();

  const { ready, authenticated, login, user, logout } = usePrivy();

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [isActive, setIsActive] = useState("Dashboard");

  const handleLoginLogout = useCallback(() => {
    if (authenticated) {
      logout();
    } else {
      login().then(()=> {
        if( user ) {
          console.log(user);
        }
      })
    }
  }, [authenticated, login, logout, user]);

  console.log(user)

  return (
    <div className={"mb-[35px] flex flex-col-reverse justify-between gap-6 md:flex-row"} >
      <div className="flex h-[52px] max-w-[458px] items-center justify-center flex-row rounded-[100px] bg-[#1c1c24] py-2 pl-4 pr-2 lg:flex-1">
        <input
          type="text"
          placeholder="Search for records"
          className="flex w-full bg-transparent p-1 font-epilogue text-[14px] font-normal text-white outline-none placeholder:text-[#4b5264]"
        />
        <div className="flex h-full w-[72px] p-2 cursor-pointer items-center justify-center rounded-[20px] bg-gradient-to-br from-blue-600/20 to-purple-600/20">
          <img
            src={search}
            alt="search"
            className="size-[20px] object-contain"
          />
        </div>
      </div>

      <div className="hidden flex-row items-center justify-end gap-2 sm:flex">
        <CustomButton
          btnType="button"
          title={authenticated ? "Log Out" : "Log In"}
          styles={authenticated ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20" : "bg-gradient-to-br from-blue-600/20 to-purple-600/20"}
          handleClick={handleLoginLogout}
        />
      </div>

      <div
        className={"relative flex items-center justify-between sm:hidden"}
      >
        <div
          className={"flex h-[40px] cursor-pointer items-center justify-center rounded-full bg-[#2c2f232] "}
        >
          <IconHeartHandshake  size={40} color={'#1ec070'} className={"p-2"} />
        </div>

        <img
          src={menu}
          alt={"icon"}
          className={"h-[34px] w-[34px] cursor-pointer object-contain"}
          onClick={() => setToggleDrawer(prev => !prev)}
        />

        <div
          className={`absolute left-0 right-0 top-[60px] z-10 bg-[#1c1c24] py-4 shadow-secondary ${!toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0" } transition-all duration-700`}
        >
          <ul className={"mb-4"} >
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${isActive === link.name && "bg-[#3a3a43]"} hover:bg-[#3a3a43]`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <im
                  src={link.imgUrl}
                  alt={link.name}
                  className={`h-[24px] w-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue text-[14px] font-semibold ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  }`}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import { useGlobalContext } from "../../../../Context";
import "./Header.scss";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const { setIsDarkMode, isDarkMode } = useGlobalContext();
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuChange = () => {
    setShowMenu((e) => {
      return !e;
    });
  };
  const handleDarkMode = () => {
    setIsDarkMode((mode) => {
      return !mode;
    });
  };
  let headerImage = {
    dark: "./assets/img/icons/logo.png",
    light: "./assets/img/icons/logo-white.png",
  };

  return (
    <>
      <div className=" proxy-header"></div>
      <div className=" w-100 header-container fixed-top">
        <div className=" container d-flex justify-content-between  h-100">
          <div className=" h-100 d-flex  align-items-center ">
            <div className=" d-flex align-items-center">
              <img
                src={isDarkMode ? headerImage.dark : headerImage.dark}
                alt=""
                className=" brand-image"
              />
              <h4 className="  mb-0">Phoenix</h4>
            </div>
            <div className=" d-none d-lg-flex ">
              <a href="#home" className=" nav-item">
                Home
              </a>
              <a href="#feature" className=" nav-item">
                Feature
              </a>
              <a href="#blog" className=" nav-item">
                Blog
              </a>
              <a href="#team" className=" nav-item">
                Team
              </a>
            </div>
          </div>
          <div className=" d-flex h-100 align-items-center nav-container">
            <div
              className=" nav-item cursor-pointer"
              onClick={() => {
                handleDarkMode();
              }}
            >
              {isDarkMode ? (
                <div className=" theme-icon dark-icon ">
                  <BsFillMoonStarsFill />
                </div>
              ) : (
                <div className=" theme-icon light-icon ">
                  <BsFillSunFill />
                </div>
              )}
            </div>

            <div className="d-none d-md-flex">
              <div className=" nav-item bg-primary bg-opacity-10 p-2 ps-3 pe-3 rounded cursor-pointer">
                Sign In
              </div>
              <div className=" nav-item btn btn-primary text-white">
                {" "}
                Sign Up
              </div>
            </div>
            <div
              className="d-flex center d-md-none"
              onClick={() => {
                handleMenuChange();
              }}
            >
              {showMenu ? (
                <div className=" menu-icon close center">
                  <IoMdClose />
                </div>
              ) : (
                <div className=" menu-icon open center">
                  <IoMenu />
                </div>
              )}
            </div>
          </div>
        </div>

        {showMenu && (
          <div className="menu-bar-wrapper d-block d-md-none">
            <div className=" p-3 d-flex flex-column">
              <input
                type="search"
                placeholder="search"
                className=" form-control"
              />
              <a href="#home" className=" vertical-nav-item">
                Home
              </a>
              <a href="#feature" className=" vertical-nav-item">
                Feature
              </a>
              <a href="#blog" className=" vertical-nav-item">
                Blog
              </a>
              <a href="#team" className=" vertical-nav-item">
                Team
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

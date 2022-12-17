import React from "react";
import "./HeroSection.scss";

import { useGlobalContext } from "../../../../Context";

import { MdArrowForwardIos } from "react-icons/md";
import CheckDemo from "../../../Shared/CheckDemo/CheckDemo";
const bottomCards = [
  {
    id: 1,
    name: "a",
    img: "./assets/img/brand2/netflix-n.png",
  },
  {
    id: 2,
    name: "a",
    img: "./assets/img/brand2/blender.png",
  },
  {
    id: 3,
    name: "a",
    img: "./assets/img/brand2/upwork.png",
  },
  {
    id: 4,
    name: "a",
    img: "./assets/img/brand2/facebook-f.png",
  },
  {
    id: 5,
    name: "a",
    img: "./assets/img/brand2/pocket.png",
  },
  {
    id: 6,
    name: "a",
    img: "./assets/img/brand2/mail-bluster-1.png",
  },
  {
    id: 7,
    name: "a",
    img: "./assets/img/brand2/discord.png",
  },
  {
    id: 8,
    name: "a",
    img: "./assets/img/brand2/google-g.png",
  },
];

const getBorderClass = (id) => {
  let final;

  switch (id) {
    case 1:
      final = "hsb-border-bottom hsb-border-end ";
      break;
    case 2:
      final = "hsb-border-bottom hsb-border-end-md ";
      break;
    case 3:
      final = "hsb-border-bottom hsb-border-end ";
      break;
    case 4:
      final = "hsb-border-bottom  ";
      break;
    case 5:
      final = " hsb-border-end ";
      break;
    case 6:
      final = " hsb-border-end-md";
      break;
    case 7:
      final = "hsb-border-top hsb-border-end hsb-border-top-md-0 ";
      break;
    case 8:
      final = "hsb-border-top hsb-border-top-md-0  ";
      break;

    default:
      final = "hsb-border-bottom hsb-border-end hsb-border-end-md";

      break;
  }
  return final;
};

const HeroSection = () => {
  const { isDarkMode } = useGlobalContext();
  return (
    <div className=" hero-section-wrapper" id="home">
      <div className=" hero-section-main container">
        <div className=" row h-100">
          <div className=" col-12 col-md-6 hero-motto">
            <div className=" h-100 w-100 d-flex justify-content-center align-items-start flex-column">
              <h1 className=" fw-bolder mb-4">
                <span className=" text-primary text-opacity-50">Elegance</span>{" "}
                for your web app
              </h1>
              <p className=" text-muted mb-4">
                Standard, modern and Elegant solution for your next web app so
                you don’t have to look further. Sign up or check the demo below.
              </p>
              <div className=" d-flex align-items-center">
                <div className=" btn btn-primary me-3"> Sign Up</div>
                <CheckDemo />
              </div>
            </div>
          </div>
          <div className=" col-12 col-md-6 hero-image-wrapper center position-lg-relative p-5">
            <div className=" position-lg-relative center">
              <img
                src="./assets/img/bg/bg-1-2.png"
                className=" bg-image"
                alt=""
              />
              <img
                // src="https://prium.github.io/phoenix/v1.6.0/assets/img/bg/bg-28.png"
                src={
                  isDarkMode
                    ? "./assets/img/bg/bg-30.png"
                    : "./assets/img/bg/bg-31.png"
                }
                alt=""
                className="hero-img w-100 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" container ">
        <div className=" row hero-section-bottom pb-5 ">
          {bottomCards.map((item) => {
            console.log(item.id < 4 ? "bd-bottom" : "bd-top");
            return (
              <div
                className={` col-6 col-md-3 hsb-item center border-1 border-dashed ${getBorderClass(
                  item.id
                )}`}
                key={item.id}
              >
                <div className=" center">
                  <img src={item.img} alt="" className=" w-100" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

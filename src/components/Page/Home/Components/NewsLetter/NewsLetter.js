import React from "react";
import "./NewsLetter.scss";
import { useGlobalContext } from "../../../../Context";

const NewsLetter = () => {
  const { isDarkMode } = useGlobalContext();
  return (
    <div className=" newsletter-wrapper pt-5 ">
      <div className=" bg-holder-right"></div>
      <div className=" bg-holder-left"></div>
      <div className=" container" style={{ zIndex: 2, position: "relative" }}>
        <div className=" card">
          <div className=" card-body d-flex flex-column justify-content-center align-items-center text-center">
            <img
              src="https://prium.github.io/phoenix/v1.6.0/assets/img/spot-illustrations/dark_27.png"
              className=" w-50"
              alt=""
            />
            <h6 className=" mt-4 mb-3">
              2008 Premium Icons . Included FREE with it
            </h6>
            <h1 className=" mb-4 newsletter-motto">
              Join <span className=" text-primary">Phoenix</span> Today
            </h1>
            <div className=" w-75 d-flex flex-column flex-md-row ">
              <input
                type="email"
                placeholder="email"
                className=" form-control me-3  "
              />
              <div className=" btn btn-primary ">Subscribe</div>
            </div>
            <p className=" mt-3">
              Best support in the world, Only Phoenix can ensure
            </p>
          </div>
        </div>
      </div>
      <div className=" botttom-clip"></div>
      <div className=" botttom-clip-proxy"></div>
    </div>
  );
};

export default NewsLetter;

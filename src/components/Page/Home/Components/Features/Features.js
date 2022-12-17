import React from "react";
import "./Features.scss";
import { MdArrowForwardIos } from "react-icons/md";
import { useGlobalContext } from "../../../../Context";
import CheckDemo from "../../../Shared/CheckDemo/CheckDemo";

const Features = () => {
  const { isDarkMode } = useGlobalContext();
  return (
    <div className=" features-section-wrapper" id="feature">
      <div className=" container">
        <div className=" row">
          <div className=" col-12 col-lg-4 ">
            <div className=" w-100 d-flex features-motto-wrapper flex-column justify-content-center align-items-center align-items-lg-start">
              <h5 className=" text-primary">Features</h5>
              <h3>A fully integrated suite of payments products</h3>
              <p>
                With the power of Phoenix, you can now focus only on
                functionaries for your digital products, while leaving the UI
                design on us!With the power of Phoenix, you can now focus only
                on functionaries for your digital products, while leaving the UI
                design on us!
              </p>
              <div className=" btn btn-outline-primary bg-primary bg-opacity-10 rounded-pill">
                Find out more
              </div>
            </div>
          </div>
          <div className=" col-12 col-lg-4 col-md-6 mt-4 mb-4">
            <div className=" w-100 h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
              <img
                src="./assets/img/icons/illustrations/bolt.png"
                className=" feactures-icon mb-3"
              />
              <h5>Lightning Speed</h5>
              <p>
                Present everything you need in one place within minutes! Grow
                with Phoenix!
              </p>
              <CheckDemo />
            </div>
          </div>
          <div className=" col-12 col-lg-4 col-md-6 mt-4 mb-4">
            <div className=" w-100 h-100 d-flex flex-column justify-content-center align-items-center align-items-lg-start">
              <img
                src="./assets/img/icons/illustrations/pie.png"
                className=" feactures-icon mb-3"
              />
              <h5>All-in-one solution</h5>
              <p>
                Show your production and growth graph in one place with Phoenix!
              </p>
              <CheckDemo />
            </div>
          </div>
        </div>
        <div className=" row mt-4 mb-4">
          <div className=" col-12 col-md-6">
            <img
              className=" h-auto w-100"
              src={
                isDarkMode
                  ? "./assets/img/spot-illustrations/dark_22.png"
                  : "./assets/img/spot-illustrations/22_2.png"
              }
              alt=""
            />
          </div>
          <div className=" col-12 col-md-6 mt-4 mb-4">
            <div className=" w-100 h-100 d-flex flex-column justify-content-center align-items-center align-items-md-start">
              <h5>SIGNAL</h5>
              <h3>Recieve the signals instantly</h3>
              <p>
                Phoenix makes it possible for you to quickly and effectively
                receive every signal. No need for drawn-out waiting.
              </p>
              <CheckDemo />
            </div>
          </div>
        </div>
        <div className=" row mt-4 mb-4">
          <div className=" col-12 col-md-6 order-md-1">
            <img
              className=" h-auto w-100"
              src={
                isDarkMode
                  ? "./assets/img/spot-illustrations/dark_23.png"
                  : "./assets/img/spot-illustrations/23_2.png"
              }
              alt=""
            />
          </div>
          <div className=" col-12 col-md-6 order-md-0 mt-4 mb-4">
            <div className=" w-100 h-100 d-flex flex-column justify-content-center align-items-center align-items-md-start">
              <h5>SIGNAL</h5>
              <h3>See Your Revenue Grow</h3>
              <p>
                Grow with Phoenix. We help you with everything you might need.,
                We make it easy and keep it simple.
              </p>
              <CheckDemo />
            </div>
          </div>
        </div>
        <div className=" row mt-4 mb-4">
          <div className=" col-12 col-md-6">
            <img
              className=" h-auto w-100"
              src={
                isDarkMode
                  ? "./assets/img/spot-illustrations/dark_24.png"
                  : "./assets/img/spot-illustrations/24_2.png"
              }
              alt=""
            />
          </div>
          <div className=" col-12 col-md-6 mt-4 mb-4">
            <div className=" w-100 h-100 d-flex flex-column justify-content-center align-items-center align-items-md-start">
              <h5>SIGNAL</h5>
              <h3>Get Reports Ready</h3>
              <p>
                With Phoenix, you can get ready reports on your growth analysis
                anytime. This dashboard also has all filters accessible
                according to your needs. Phoenix makes it possible for you to
                quickly and effectively receive every signal. No need for
                drawn-out waiting.
              </p>
              <CheckDemo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

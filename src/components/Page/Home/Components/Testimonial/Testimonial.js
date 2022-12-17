import React from "react";
import "./Testimonial.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/autoplay";

const testimonials = [
  {
    id: 1,
    name: "Monica Gomez",
    words:
      "Brilliant app! Will definitely going to be my first choice starting from today",
    position: "UX designer, Google",
    img: "./assets/img/team/61.png",
  },
  {
    id: 1,
    name: "Axel Barry",
    words: `
      Phoenix is all you can ask for. This is perfect fit for everything you might want to work on!`,
    position: "UX designer, Apple",
    img: "./assets/img/team/35.png",
  },
  {
    id: 3,
    name: "Marc Chiasson",
    words:
      "Excellent to work with and comfortable to customize. This is what I was looking for till the date!",
    position: "UX designer, Adobe",
    img: "./assets/img/team/8.png",
  },
];

const Testimonial = () => {
  return (
    <div className=" testimonial-wrapper  position-relative">
      <div className="ts1-wrapper position-relative">
        <div className=" proxy-svg-height"></div>
        <svg
          className="w-100 svg-top"
          viewBox="0 0 1920 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M1920 0.44L0 367.74V0H1920V0.44Z" fill="currentColor" />
        </svg>
        <div className=" bg-holder-right"></div>
        <div className=" bg-holder-left"></div>
        <div className=" ts1-container container">
          <div className=" testimonial-s1 row">
            <div className=" col-12 col-md-6  d-flex flex-column justify-content-center align-items-center align-items-md-start">
              <h4 className=" text-primary">Testimonial</h4>
              <h3>More than 2 Millions happy Customers and counting</h3>
              <p>
                You may now concentrate on the functionality and other aspects
                of your web products thanks to Phoenix's strength before leaving
                the UI design to us. It is simple to complete the work after
                checking and double-checking.
              </p>
            </div>
            <div className=" col-12 col-md-6   center slide-wrapper">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection: true,
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay]}
                grabCursor={true}
              >
                {testimonials.map((item, index) => {
                  return (
                    <SwiperSlide>
                      {/*
                       ***************************************************************************************************************************
                       ********************************************************* Slide *************************************************************
                       ***************************************************************************************************************************
                       */}
                      <div className=" d-flex flex-column flex-md-row  justify-content-md-between align-items-center slide-item">
                        <div className=" d-flex justify-content-center align-items-center slide-img-wrapper">
                          <div className=" position-relative slide-img-container w-75 h-75 ">
                            <div className=" slide-img-bg "></div>
                            <img
                              src={item.img}
                              alt=""
                              className=" w-100 h-100"
                            />
                          </div>
                        </div>
                        <div className=" d-flex flex-column ms-0 ms-md-4 justify-content-md-center">
                          <h4 className=" mb-3 ">“{item.words}”</h4>
                          <p className=" mb-0">{item.name}</p>
                          <p>{item.position}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="ts2-wrapper position-relative">
        <div className=" proxy-svg-height"></div>

        <svg
          className="w-100 svg-top"
          viewBox="0 0 1920 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M1920 0.44L0 367.74V0H1920V0.44Z" fill="currentColor" />
        </svg>
        <svg
          className="w-100 svg-bottom"
          viewBox="0 0 1920 368"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M1920 0.44L0 367.74V0H1920V0.44Z" fill="currentColor" />
        </svg>
        <div className=" ts2-container container text-white">
          <div className=" testimonial-s2 center flex-column">
            <div className=" row heading-text">
              <div className=" col-12 col-lg-6 d-flex flex-column ">
                <h2>Being used by millions of users</h2>
                <h1 className=" text-primary">WORLDWIDE</h1>
              </div>
              <div className=" col-12 col-lg-6 p-4">
                <p className=" w-100">
                  You can get all the reports, data analysis, and growth maps
                  you need with the help of Phoenix's power, and you may review
                  and modify them whenever you want. These features make this
                  dashboard outstanding.
                </p>
              </div>
              <div className=" col-12 col-lg-8 p-4">
                <div className=" d-flex flex-column justify-content-md-evenly flex-md-row align-items-center w-100 ">
                  <div className=" d-flex align-items-center align-items-md-start flex-column justify-content-center ">
                    <h1>308k</h1>
                    <p>We have 308+ active paid. subscribers.</p>
                  </div>
                  <div className=" d-flex align-items-center align-items-md-start flex-column justify-content-center ">
                    <h1>125+ </h1>
                    <p className=" w-75">
                      Every month, there are more than 125+ sales.
                    </p>
                  </div>
                  <div className=" d-flex align-items-center align-items-md-start flex-column justify-content-center">
                    <h1>12 </h1>
                    <p className=" w-75">
                      We have won 12 awards so far with great success.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-lg-4 p-4 center">
                <div className=" w-100 d-flex justify-content-center justify-content-md-start ">
                  <img
                    src="https://prium.github.io/phoenix/v1.6.0/assets/img/generic/capterra.png"
                    alt=""
                    className=" bg-light bg-opacity-25 w-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" proxy-svg-height"></div>
      </div>
    </div>
  );
};

export default Testimonial;

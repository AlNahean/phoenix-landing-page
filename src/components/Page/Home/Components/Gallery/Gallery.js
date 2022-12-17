import React from "react";
import "./Gallery.scss";

const galleryShowcaseImages = [
  { id: 1, img: "./assets/img/gallery/3.png" },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  { id: 4, img: "./assets/img/gallery/4.png" },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  { id: 6, img: "./assets/img/gallery/10.png" },
  { id: 7, img: "./assets/img/gallery/7.png" },
  { id: 8, img: "./assets/img/gallery/8.png" },
  { id: 9, img: "./assets/img/gallery/9.png" },
];

const Gallery = () => {
  return (
    <div className=" gallery-wrapper">
      <div className=" gallery-header-wrapper">
        <div className=" gallery-header container ">
          <h3 className=" w-100 text-center text-sm-start text-primary">
            Gallery
          </h3>
          <h2 className=" w-100 text-center text-sm-start mt-2 mb-5">
            Some of Our Best Works
          </h2>
          <div className="row">
            <div className=" col-12 col-lg-6">
              <p className=" w-100 text-center text-sm-start">
                Rise like Phoenix focusing only on functionalities for your
                digital products leaving the design for us. Show what you do,
                with our latest admin dashboard. Check our best works and let us
                know what you want to find.
              </p>
            </div>
            <div className=" col-12 col-lg-6">
              <p className=" w-100 text-center text-sm-start">
                Want to tell your customers about the details of how and what?
                Tell them with all the posts at one place without them
                ridirecting to another page or site.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" gallery-showcase-wrapper ">
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
        <div className=" bg-holder-right"></div>
        <div className=" bg-holder-left"></div>
        <div className=" gallery-showcase container mt-0">
          <div className=" d-flex mb-4 align-items-center">
            <div className=" me-3">First</div>
            <div className=" me-3">Second</div>
            <div className=" me-3 border  border-1 rounded-3 p-1 ps-3 pe-3">
              Third
            </div>
            <div className="me-3 ">Fourth</div>
          </div>

          <div className=" gallery-images-container mt-0">
            <div className="row">
              {galleryShowcaseImages.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={`${
                      item.id % 3 !== 0
                        ? "col-12 col-md-6 mb-4 "
                        : "col-12 mb-4"
                    }  `}
                  >
                    <img
                      src={item.img}
                      alt=""
                      className=" w-100 h-auto rounded-3 gallery-image"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

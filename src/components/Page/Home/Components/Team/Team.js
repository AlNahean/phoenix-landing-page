import React from "react";
import "./Team.scss";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { id: 1, icon: <FaFacebook /> },
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaLinkedin /> },
];
const team = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO, Global Cheat",
    img: "./assets/img/team/61.png",
  },
  {
    id: 2,
    name: "Marc Chiasson",
    position: "Vice President",
    img: "./assets/img/team/62.png",
  },
  {
    id: 3,
    name: "Lilah Lola",
    position: "Marketing Manager",
    img: "./assets/img/team/63.png",
  },
  {
    id: 4,
    name: "Thomas Doe",
    position: "UX Designer",
    img: "./assets/img/team/64.png",
  },
  {
    id: 5,
    name: "Alan Casey",
    position: "Front End Developer",
    img: "./assets/img/team/65.png",
  },
  {
    id: 6,
    name: "Narokin Hijita",
    position: "CEO, Global Cheat",
    img: "./assets/img/team/66.png",
  },
  {
    id: 7,
    name: "Narokin Hijita",
    position: "CEO, Global Cheat",
    img: "./assets/img/team/67.png",
  },
  {
    id: 8,
    name: "John Doe",
    position: "CEO, Global Cheat",
    img: "./assets/img/team/68.png",
  },
];

const Team = () => {
  return (
    <div className=" team-wrapper position-lg-relative " id="team">
      <div className=" bg-holder-right"></div>
      <div className=" bg-holder-left"></div>
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
      <div className=" team-container container">
        <h4 className=" text-primary">Team</h4>
        <h1 className=" mb-4">Our small team behind our success</h1>
        <div className=" row mb-5">
          <div className=" col-12 col-md-6">
            <p>
              We have a small but strong development team to follow up on the
              development process. Reach out to us for further information.
            </p>
          </div>
          <div className=" col-12 col-md-6">
            <p>
              We have a small but strong development team to follow up on the
              development process. Reach out to us for further information.
            </p>
          </div>
        </div>
        <div className=" row">
          {team.map((person) => {
            return (
              <div className=" col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
                <div className=" d-flex flex-column justify-content-center align-items-center">
                  <div className="img-container">
                    <img src={person.img} alt="" className=" w-100 rounded-3" />
                  </div>
                  <h5 className=" mb-0 mt-2">{person.name}</h5>
                  <div className=" small">{person.position}</div>
                  <div className=" d-flex social-icon-wrapper">
                    {socialLinks.map((item) => {
                      return (
                        <div className="social-icon cursor-pointer text-primary">
                          {item.icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;

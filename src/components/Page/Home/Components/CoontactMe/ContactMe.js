import React from "react";
import "./ContactMe.scss";

import { BsTelephoneMinusFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { id: 1, icon: <FaFacebook /> },
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaLinkedin /> },
];

// const api_key = "AIzaSyAo9aGKJ4e081WjFqfPvSqEvnRGS-LIxd";//get from cloud platform
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};
const AnyReactComponent = () => {
  return <div>map</div>;
};

const addressList = [
  { id: 1, icon: <BsTelephoneMinusFill />, text: "+8801688961770" },
  { id: 1, icon: <GrMail />, text: "nahean.fardous@gmail.com" },
  { id: 1, icon: <BiCurrentLocation />, text: "Bangladesh" },
];
const ContactMe = () => {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: api_key,
  // });

  // console.log(isLoaded, "isLoaded");

  // if (!isLoaded) {
  //   return <div>Loading</div>;
  // }
  return (
    <div className=" contact-wrapper ">
      <div className=" address-container container">
        <h4 className=" text-primary">Address</h4>
        <h1 className=" mb-5">If you need to find us:</h1>

        <div className=" w-100"></div>
      </div>

      <div className=" contact-main container">
        <div className=" row">
          <div className=" col-12 col-md-6 contact-infos">
            <h4 className=" mb-3">Stay connected</h4>
            <p>
              Stay connected with Phoenix's Help Center; Phoenix is available
              for your necessities at all times.
            </p>

            <ul className=" list-unstyled mt-4">
              {addressList.map((item) => {
                return (
                  <li className=" d-flex align-items-center address-item-wrapper mb-3">
                    <div className=" address-icon me-3">{item.icon}</div>
                    <div>{item.text}</div>
                  </li>
                );
              })}
            </ul>
            <div className=" social-links-wrapper d-flex text-primary text-opacity-75">
              {socialLinks.map((social) => {
                return <div className=" social-icon me-4 ">{social.icon}</div>;
              })}
            </div>
          </div>
          <div className=" col-12 col-md-6 contact-msg">
            <h4 className=" mb-3">Drop us a line</h4>
            <p>
              If you have any query or suggestion , we are open to learn from
              you, Lets talk, reach us anytime.
            </p>

            <div className=" contact-foem">
              <input
                type=" text"
                className=" form-control mb-2"
                placeholder=" name"
              />
              <input
                type=" email"
                className=" form-control mb-2"
                placeholder=" email"
              />
              <textarea
                name=""
                id=""
                rows="4"
                placeholder=" message"
                className=" form-control mb-2"
              ></textarea>

              <div className=" btn btn-outline-primary w-100">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

{
  /* <GoogleMapReact
  bootstrapURLKeys={{ key: api_key }}
  defaultCenter={{ lat: "59.955413", lng: "30.337844" }}
  defaultZoom={0}
  yesIWantToUseGoogleMapApiInternals
  onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
  style={{ height: " 100%", width: "100%" }}
>
  <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
</GoogleMapReact>; */
}

{
  /* <GoogleMap
zoom={10}
center={{ lat: 59.955413, lng: 30.337844 }}
mapContainerClassName=" h-100 w-100"
></GoogleMap> */
}

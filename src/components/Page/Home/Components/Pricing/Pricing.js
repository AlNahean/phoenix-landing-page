import React from "react";
import "./Pricing.scss";

import { GrCheckmark } from "react-icons/gr";
const pricingCards = [
  {
    id: 1,
    icon: "./assets/img/icons/illustrations/pie.png",
    type: "Starter",
    price: 6,
    isPopular: false,
    services: [
      { name: "Timeline", added: true },
      { name: "Advansed Search", added: true },
      { name: "Custom Feilds", added: false },
      {
        name: "Task dependencies",
        added: false,
      },
      { name: "Private teams & projects", added: false },
    ],
    timeline: { name: "Timeline", added: true },
    advancedSearch: { name: "Advansed Search", added: true },
    customFeilds: { name: "Custom Feilds", added: false },
    taskDependencies: {
      name: "Task dependencies",
      added: false,
    },
    term: { name: "Private teams & projects", added: false },
  },
  {
    id: 2,
    icon: "./assets/img/icons/illustrations/bolt.png",
    type: "Team",
    price: 12,
    isPopular: false,
    services: [
      { name: "Timeline", added: true },
      { name: "Advansed Search", added: true },
      { name: "Custom Feilds", added: true },
      {
        name: "Task dependencies",
        added: false,
      },
      { name: "Private teams & projects", added: false },
    ],
    timeline: { name: "Timeline", added: true },
    advancedSearch: { name: "Advansed Search", added: true },
    customFeilds: { name: "Custom Feilds", added: false },
    taskDependencies: {
      name: "Task dependencies",
      added: false,
    },
    term: { name: "Private teams & projects", added: false },
  },
  {
    id: 3,
    icon: "./assets/img/icons/illustrations/edit.png",
    type: "Business",
    price: 23,
    isPopular: true,
    services: [
      { name: "Timeline", added: true },
      { name: "Advansed Search", added: true },
      { name: "Custom Feilds", added: true },
      {
        name: "Task dependencies",
        added: true,
      },
      { name: "Private teams & projects", added: false },
    ],
    timeline: { name: "Timeline", added: true },
    advancedSearch: { name: "Advansed Search", added: true },
    customFeilds: { name: "Custom Feilds", added: false },
    taskDependencies: {
      name: "Task dependencies",
      added: false,
    },
    term: { name: "Private teams & projects", added: false },
  },
  {
    id: 4,
    icon: "./assets/img/icons/illustrations/shield.png",
    type: "Enterprice",
    price: 40,
    isPopular: false,
    services: [
      { name: "Timeline", added: true },
      { name: "Advansed Search", added: true },
      { name: "Custom Feilds", added: true },
      {
        name: "Task dependencies",
        added: true,
      },
      { name: "Private teams & projects", added: true },
    ],
    timeline: { name: "Timeline", added: true },
    advancedSearch: { name: "Advansed Search", added: true },
    customFeilds: { name: "Custom Feilds", added: false },
    taskDependencies: {
      name: "Task dependencies",
      added: false,
    },
    term: { name: "Private teams & projects", added: false },
  },
];
const Pricing = () => {
  return (
    <div className=" pricing-wrapper position-relative">
      <div className=" bg-holder-right"></div>
      <div className=" bg-holder-left"></div>
      <div className=" container">
        <div className=" row mb-4">
          <h4 className=" text-primary ">Pricing</h4>
          <h1 className=" mt-2 mb-4">Choose the best deal for you</h1>
          <div className=" col-12 col-md-6">
            <p>
              Entice your customers with Phoenix admin dashboard. Show your best
              deal in this section to help customers choose from your best
              offers and place them all in one place with this efficient
              template. If you are availing more than one
            </p>
          </div>
          <div className=" col-12 col-md-6">
            <p>
              offer to your customers, let them compare among them and search
              for what they need to get. Show offer details here and entice them
              to buy.
            </p>
          </div>
        </div>
        <div className=" row ">
          {pricingCards.map((item) => {
            return (
              <div className=" col-12 col-md-6    col-xl-3  mt-5 mb-3 ">
                <div className=" card position-relative">
                  {item.isPopular && (
                    <div className=" position-absolute most-popular bg-primary bg-opacity-25 pt-2 pb-5 ">
                      Most popular
                    </div>
                  )}
                  <div className=" card-body d-flex flex-column align-items-center ">
                    <img
                      src={item.icon}
                      alt=""
                      className=" pricing-card-icon mb-4 mt-4"
                    />
                    <h2>{item.type}</h2>
                    <div>
                      <span className=" h1 text-primary">${item.price}</span>
                      <span className=" h4">USD</span>
                    </div>
                    <div className=" btn btn-outline-primary pt-1 pb-1 ps-4 pe-4 mt-4">
                      Buy
                    </div>
                    <div className=" d-flex flex-column">
                      {item.services.map((service, index) => {
                        return (
                          <div className=" d-flex align-items-center pricing-item mt-2 mb-2">
                            <div className=" checkmark-holder">
                              {service.added && (
                                <div className=" check-icon">
                                  <GrCheckmark />
                                </div>
                              )}
                            </div>
                            <div className=" ps-2">{service.name}</div>
                          </div>
                        );
                      })}
                      {/* <div className=" d-flex">
                        <div>
                          {item.advancedSearch.added && (
                            <div className=" check-icon">
                              <GrCheckmark />
                            </div>
                          )}
                        </div>
                        <div className=" ps-2">{item.advancedSearch.name}</div>
                      </div>
                      <div className=" d-flex">
                        <div>
                          {" "}
                          {item.customFeilds.added && (
                            <div className=" check-icon">
                              <GrCheckmark />
                            </div>
                          )}{" "}
                        </div>
                        <div className=" ps-2">
                          {item.customFeilds.name}
                          <span className=" badge bg-info ms-2">New </span>
                        </div>
                      </div>
                      <div className=" d-flex">
                        <div>{item.taskDependencies.added && ""}</div>
                        <div className=" ps-2">
                          {item.taskDependencies.name}
                        </div>
                      </div>
                      <div className=" d-flex">
                        <div>
                          {item.term.term && (
                            <div className=" check-icon">
                              <GrCheckmark />
                            </div>
                          )}{" "}
                        </div>
                        <div className=" ps-2">{item.term.name}</div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className=" mb-0 w-100 text-center mt-4 text-warning">
          For Enterprise Solution with Managed SMTP, Custom API setup, Dedicated
          Support, and more - Contact us
        </p>
      </div>
    </div>
  );
};

export default Pricing;

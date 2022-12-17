import React from "react";
import "./Blog.scss";
import { BsEyeFill, BsHeartFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const blogIcons = [
  {
    id: 1,
    icon: <BsEyeFill />,
    count: 2563,
  },
  {
    id: 2,
    icon: <FaComment />,
    count: 257,
  },
  {
    id: 3,
    icon: <BsHeartFill />,
    count: 12,
  },
];

const blogs = [
  {
    id: 1,
    heading: "Top 10 ways to Ace SEO for your business",
    img: "./assets/img/blog/blog-1.png",
  },
  {
    id: 2,
    heading: "Top 12 Marketing strategies you can take",
    img: "./assets/img/blog/blog-2.png",
  },
  {
    id: 3,
    heading: "The top 7 methods to improve as a marketer",
    img: "./assets/img/blog/blog-3.png",
  },
  {
    id: 4,
    heading: "Top 10 ways to something somethin..",
    img: "./assets/img/blog/blog-4.png",
  },
];
const Blog = () => {
  return (
    <div className=" blog-page-wrapper" id="blog">
      <div className=" blog-header container">
        <h4 className=" text-primary">Blog</h4>
        <h1 className=" mb-4">Latest articles</h1>
        <div className=" row">
          <div className=" col-12 col-md-6">
            <p>
              See the latest articles we published with this dashboard. Your
              customers will be happy to find all the latest posts in one place.
              This menu efficiently shows all related topics from search filters
              and provides the customers with what
            </p>
          </div>
          <div className=" col-12 col-md-6">
            <p>
              they need. Also you can just educate your customers about
              everything they need to know and follow to avail a service with
              you. This menu is the one to show them that.
            </p>
          </div>
        </div>
      </div>
      <div className=" blog-cards-container container">
        <div className=" row">
          {blogs.map((item) => {
            return (
              <div className=" col-12 col-md-6 col-xl-3 mb-4">
                <div className=" card">
                  <img src={item.img} alt="" className=" w-100" />
                  <div className=" card-body">
                    <div className=" d-flex align-items mb-3">
                      {blogIcons.map((item) => {
                        return (
                          <div className=" d-flex align-items-center me-3">
                            <div className=" blog-icon class-name me-1">
                              {item.icon}
                            </div>
                            <p className=" mb-0">{item.count}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div className=" badge">
                      <h6 className=" mb-0 border border-primary p-1 ps-3 pe-3 rounded text-primary">
                        Tech
                      </h6>
                    </div>

                    <h4 className=" mb-2">{item.heading}</h4>

                    <div className=" d-flex align-items-center cursor-pointer mb-3">
                      <p className=" text-primary mb-0 ">Check Demo</p>
                      <div className=" text-primary ">
                        <MdKeyboardArrowRight />
                      </div>
                    </div>
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

export default Blog;

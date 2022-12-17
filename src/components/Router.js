import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/home";
import Test from "./Page/Test/Test.jsx";
import Error from "./Page/Error/Error";
import useSwiperCss from "./Page/Shared/Hooks/useSwiperCss";

const Routing = () => {
  useSwiperCss();
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/home" caseSensitive={false} element={<Home />} />
        <Route path="/test" caseSensitive={false} element={<Test />} />
        <Route path="*" caseSensitive={false} element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Routing;

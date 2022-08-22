import React from "react";
import AuthorIntro from "../components/AuthorIntro";
import Expertise from "../components/Expertise";
import TimeLine from "../components/TimeLine";

const MainLayout = () => {
  return (
    <div className="md:w-2/3 px-8">
      <AuthorIntro />
      <Expertise />
      <TimeLine />
    </div>
  );
};

export default MainLayout;

import React from "react";
import AuthorCard from "../components/AuthorCard";

const AuthorLayout: React.FC = () => {
  return (
    <div className="md:w-1/3 p-2 md:flex md:justify-center">
      <AuthorCard />
    </div>
  );
};

export default AuthorLayout;

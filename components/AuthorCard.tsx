import React from "react";
import { SiGmail } from "react-icons/si";
import { myInfo } from "../data/MyMetaData";

const AuthorCard = () => {
  return (
    <div className="md:fixed">
      <div className="md:block flex justify-center items-center">
        {myInfo.profileImg !== null && (
          <picture className="flex-shrink-0">
            <img
              src={myInfo.profileImg}
              className="w-32 h-32 sm:w-60 sm:h-60 shadow-xl rounded-full dark:bg-white"
              alt="card-photo"
            ></img>
          </picture>
        )}
        <div className="mb-2 mx-4 mt-4 justify-center items-center flex-shrink">
          <h1 className="text-lg sm:text-3xl text-gray-600 font-bold dark:text-white">
            {myInfo.name}
          </h1>
          <div className="text-sm sm:text-lg text-gray-600 dark:text-white">
            {myInfo.job}
          </div>
          <div className="my-2 text-xs sm:text-base text-gray-600 flex dark:text-white items-center">
            <SiGmail className="mr-3" />
            <a href={`mailto:${myInfo.mail}`}>{myInfo.mail}</a>
          </div>
        </div>
      </div>

      <div className="mx-4 hidden md:block">
        {myInfo.profiles &&
          myInfo.profiles.map((p) => {
            return (
              <div
                key={p.id}
                className="my-2 text-gray-600 flex dark:text-white items-center"
              >
                {p.icon !== null && React.createElement(p.icon)}
                <a
                  className="ml-3"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.title === null ? p.url : p.title}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AuthorCard;

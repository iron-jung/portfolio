import React from "react";

const Expertise = () => {
  return (
    <div className="mt-8">
      <div className="mt-2">
        <h2 className="mb-2 text-xl text-gray-600 font-bold dark:text-white capitalize">
          Frontend
        </h2>

        <ul className="flex flex-wrap gap-4 items-center">
          <li className="flex items-center">
            <div className="h-10 w-10 rounded-sm drop-shadow-sm"></div>
          </li>
          <li className="flex items-center">
            <div className="h-10 w-10 rounded-sm drop-shadow-sm"></div>
          </li>
          <li className="flex items-center">
            <div className="h-10 w-10"></div>
          </li>
          <li className="flex items-center">
            <div className="h-10 w-10"></div>
          </li>
          <li className="flex items-center">
            <div className="h-10 w-10"></div>
          </li>
          <li className="flex items-center">
            <div className="h-10 w-10"></div>
          </li>
          <li className="flex items-center">
            <div className="h-10 w-10"></div>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="mb-2 text-xl text-gray-600 font-bold dark:text-white capitalize">
          Backend
        </h2>
        <ul className="mb-6 flex flex-wrap gap-4">
          <li className="flex items-center">
            <div className="h-10 w-10"></div>
          </li>
          <li className="flex items-center">
            <div className="h-10 w-10"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Expertise;

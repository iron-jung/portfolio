import React from "react";
import shortid from "shortid";
import { MyTimeLine } from "../data/MyTimeLine";

const TimeLine = () => {
  return (
    <div className="opacity-100 mt-10">
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {MyTimeLine &&
          MyTimeLine.map((timeline) => {
            return (
              <li className="mb-10 ml-6" key={shortid.generate()}>
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <picture>
                    <img
                      className="w-3 h-3 text-blue-600 dark:text-blue-400"
                      src={timeline.imgSrc}
                      alt="acadamy"
                    />
                  </picture>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-600 dark:text-white">
                  {timeline.title}
                  {timeline.currently && (
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      Currently
                    </span>
                  )}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {timeline.fromAt} - {timeline.toAt}
                </time>
                <p className="mb-4 text-sm md:text-base font-normal text-gray-600 dark:text-white">
                  {timeline.desc}
                </p>
              </li>
            );
          })}
      </ol>
    </div>
  );
};

export default TimeLine;

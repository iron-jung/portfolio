import React from "react";
import { HiOutlineFolder, HiExternalLink } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { ProjectType } from "../data/ProjectList";

const ProjectCard: React.FC<ProjectType> = ({
  realSrc,
  githubSrc,
  title,
  desc,
  company,
  fromAt,
  toAt,
  language,
  toyProject,
}) => {
  return (
    <div className="p-4 md:w-1/2 md" style={{ maxWidth: "544px" }}>
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
        <div className="p-6">
          <div className="flex flex-row justify-between items-center">
            <div className="my-2 flex flex-row justify-center items-center">
              <HiOutlineFolder
                className="text-indigo-800"
                size={25}
              ></HiOutlineFolder>
              {toyProject && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  토이프로젝트
                </span>
              )}
            </div>
            <div className="flex flex-row justify-between">
              {realSrc && (
                <div className="mx-1">
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={realSrc}
                  >
                    <span className="sr-only">{realSrc}</span>
                    <HiExternalLink size={25} />
                  </a>
                </div>
              )}
              {githubSrc && (
                <div className="mx-1">
                  <a
                    className="text-sm text-gray-500 transition hover:text-gray-600"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={githubSrc}
                  >
                    <span className="sr-only">{githubSrc}</span>
                    <SiGithub size={25} />
                  </a>
                </div>
              )}
            </div>
          </div>
          <h2 className="text-lg md:text-2xl font-bold leading-8 tracking-tight mb-3 dark:text-white">
            {title}
          </h2>
          <p className="text-sm mb-2 font-thin dark:text-gray-500">{company}</p>
          <p className="text-sm mb-2 font-thin dark:text-gray-500">
            {fromAt} - {toAt}
          </p>
          <p className="prose text-gray-600 max-w-none dark:text-white mb-3">
            {desc}
          </p>
          {language && (
            <div className="flex flex-row justify-between">
              <div className="text-gray-500 text-sm md:text-base font-light dark:text-gray-400">
                {language.join(` • `)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import Head from "next/head";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import DefaultLayout from "../layouts/DefaultLayout";
import shortid from "shortid";
import { ProjectList } from "../data/ProjectList";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Iron.J Portfolio - Projects 📖</title>
      </Head>

      <DefaultLayout>
        <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Projects
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              저의 손길이 들어간 프로젝트
            </p>
          </div>
          {ProjectList && (
            <main className="relative mb-auto">
              <div>
                <div className="container py-12">
                  <div className="flex flex-wrap -m-4">
                    {ProjectList.map(
                      (project) =>
                        !project.isHidden && (
                          <ProjectCard key={shortid.generate()} {...project} />
                        )
                    )}
                  </div>
                </div>
              </div>
            </main>
          )}
        </div>
      </DefaultLayout>
    </>
  );
};

export default Projects;

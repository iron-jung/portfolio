import Head from "next/head";
import React from "react";
import PostItem from "../components/PostItem";
import DefaultLayout from "../layouts/DefaultLayout";
import NotionService from "../services/NotionService";
import { PageTypeInPageObjectResponse } from "../types";

interface PostsType {
  pages: PageTypeInPageObjectResponse[];
  error: Error;
}

const Posts: React.FC<PostsType> = ({ pages, error }) => {
  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      <Head>
        <title>O.IT Portfolio 📖</title>
      </Head>

      <DefaultLayout>
        <header className="pt-16 pb-9 sm:pb-16 sm:text-center">
          <h1 className="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200">
            Blog
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-400">
            저의 자유로운 블로그 공간으로 이동합니다.
          </p>
        </header>
        <div className="space-y-16 mx-auto max-w-7xl">
          {pages.length ? (
            pages.map((page) => {
              const { id, pageTitle, createdAt, tag, subTitle } = page;
              return (
                <PostItem
                  key={id}
                  pageTitle={pageTitle}
                  subTitle={subTitle}
                  createdAt={createdAt}
                  tag={tag}
                />
              );
            })
          ) : (
            <div>
              <article className="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]">
                <h3 className="text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200 text-center">
                  블로그 포스터 정보가 존재하지 않습니다.
                </h3>
              </article>
            </div>
          )}
        </div>
      </DefaultLayout>
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const results = await NotionService.getDevDatabase();

  if (results.length) {
    try {
      const getData = results.map(async (r) => {
        if (r.object === "page") {
          const pageTitle = await NotionService.getPagePropertie(
            r.id,
            r.properties.title.id
          );

          const subTitle = await NotionService.getPagePropertie(
            r.id,
            r.properties.subtitle.id
          );

          const tag = await NotionService.getPagePropertie(
            r.id,
            r.properties.tag.id
          );

          const createdAt = await NotionService.getPagePropertie(
            r.id,
            r.properties.createdAt.id
          );

          return { ...r, pageTitle, tag, createdAt, subTitle };
        }
      });

      const pages = await Promise.all(getData);

      return {
        props: {
          pages,
          error: null,
        },
      };
    } catch (error) {
      return {
        props: {
          pages: null,
          error: error,
        },
      };
    }
  }

  return {
    props: {
      pages: [],
      error: null,
    },
  };
}

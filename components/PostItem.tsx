import Link from "next/link";
import React from "react";
import moment from "moment";
import "moment/locale/ko";
import { PageType } from "../types";

const PostItem: React.FC<PageType> = ({
  id,
  pageTitle,
  subTitle,
  createdAt,
  tag,
}) => {
  moment.locale("ko");

  // const BLOG_URL = process.env.NEXT_PUBLIC_BLOG_URL!;
  const BLOG_URL = 'https://posts.iron-j.xyz';

  return (
    <div>
      <article className="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]">
        <h3 className="text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200">
          <a
            href={`${BLOG_URL}/${id.replace(/-/gi, "")}`}
            target="_blank"
            rel="noreferrer"
          >
            {pageTitle}
          </a>
        </h3>
        <p className="mb-4 text-slate-700 tracking-tight font-light text-sm dark:text-slate-200">
          {moment(createdAt).format("LLLL")}
        </p>

        <div className="mb-6 prose prose-slate dark:text-slate-200">
          <p>{subTitle}</p>
        </div>
        {tag.length > 0 && (
          <div className="mt-auto flex flex-row-reverse items-center justify-end">
            <dl>
              <dd className="mt-2 text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap font-bold">
                {tag.map((t) => {
                  return (
                    <span
                      key={t}
                      className="bg-gray-400 text-white py-1 px-2 rounded-md mr-1 last:mr-0"
                    >
                      {t}
                    </span>
                  );
                })}
              </dd>
            </dl>
          </div>
        )}
      </article>
    </div>
  );
};

const normalizeTitle = (title: string | null): string => {
  return (
    (title || "")
      .replace(/ /g, "-")
      // [한글주소지원] 대/소문자 영문/숫자가 아닌 경우 문자열 제거됨
      // .replace(/[^a-zA-Z0-9-]/g, '')
      .replace(/--/g, "-")
      .replace(/-$/, "")
      .replace(/^-/, "")
      .trim()
    // [한글주소지원] 소문자화 불필요
    // .toLowerCase()
  );
};

export default PostItem;

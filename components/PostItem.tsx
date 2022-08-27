import Link from "next/link";
import React from "react";
import moment from "moment";
import "moment/locale/ko";
import { PageType } from "../types";

const PostItem: React.FC<PageType> = ({
  pageTitle,
  subTitle,
  createdAt,
  tag,
}) => {
  moment.locale("ko");

  return (
    <div>
      <article className="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]">
        <h3 className="text-4xl text-slate-700 tracking-tight font-bold dark:text-slate-200">
          <Link href="/">
            <a>{pageTitle}</a>
          </Link>
        </h3>
        <p className="mb-4 text-slate-700 tracking-tight font-light text-sm dark:text-slate-200">
          {moment(createdAt).format("LLLL")}
        </p>

        <div className="mb-6 prose prose-slate dark:text-slate-200">
          <p>{subTitle}</p>
        </div>
        <div className="mt-auto flex flex-row-reverse items-center justify-end">
          <dl>
            <dd className="mt-2 text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap font-bold">
              {tag.length &&
                tag.map((t) => {
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
        <br />
      </article>
    </div>
  );
};

export default PostItem;

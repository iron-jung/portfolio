import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import shortid from "shortid";
import { MenuList } from "../data/MenuList";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="md:max-w-6xl mx-auto sticky top-0 z-50">
      <div
        className={classNames(
          "bg-white dark:bg-gray-900 px-10 overflow-hidden font-2xl md:overflow-visible dark:text-blue-200"
        )}
      >
        <div
          className={classNames(
            "md:py-4 py-2 flex flex-wrap items-center justify-center border-b border-gray-200 dark:border-gray-400"
          )}
        >
          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon block cursor-pointer md:hidden px-2 relative select-none"
            htmlFor="menu-btn"
          >
            <span className="bg-grey-darkest flex items-center relative"></span>
          </label>

          <ul className="flex justify-center list-reset m-0 w-full md:w-auto">
            {MenuList.map((menu) => {
              const defaultStyle =
                "block md:inline-block px-4 py-3 no-underline font-bold text-lg md:text-2xl hover:text-blue-600";
              return (
                <li
                  key={shortid.generate()}
                  className={classNames(
                    defaultStyle,
                    {
                      "text-blue-600 dark:text-blue-600": menu.src === pathname,
                    },
                    { "text-black dark:text-gray-600": menu.src !== pathname }
                  )}
                >
                  <Link href={menu.src}>{menu.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

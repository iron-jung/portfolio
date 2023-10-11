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
            <picture className="h-10 w-10">
              <img src="/image/icon/jquery.svg" alt="jquery" />
            </picture>
          </li>
          {/* <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/nextdotjs.svg" alt="nextdotjs" />
            </picture>
          </li> */}
          <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/javascript.svg" alt="javascript" />
            </picture>
          </li>
          {/* <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/react.svg" alt="react" />
            </picture>
          </li> */}
          <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/bootstrap.svg" alt="bootstrap" />
            </picture>
          </li>
          {/* <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/tailwindcss.svg" alt="tailwindcss" />
            </picture>
          </li> */}
          <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/apachecordova.svg" alt="apachecordova" />
            </picture>
          </li>
          <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/nodedotjs.svg" alt="nodedotjs" />
            </picture>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="mb-2 text-xl text-gray-600 font-bold dark:text-white capitalize">
          Backend
        </h2>
        <ul className="mb-6 flex flex-wrap gap-4">
          <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/spring.svg" alt="spring" />
            </picture>
          </li>
          <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/springboot.svg" alt="springboot" />
            </picture>
          </li>
          <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/oracle.svg" alt="oracle" />
            </picture>
          </li>
          <li className="flex items-center">
            <picture className="h-10 w-10">
              <img src="/image/icon/mariadb.svg" alt="mariadb" />
            </picture>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Expertise;

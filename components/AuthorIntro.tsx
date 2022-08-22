import React from "react";

const AuthorIntro = () => {
  return (
    <div className="mb-6">
      <h2 className="mt-6 text-xl sm:text-4xl text-gray-600 font-bold capitalize dark:text-white">
        <p>👋 안녕하세요! O.IT 입니다!</p>
      </h2>
      <div className="mt-8 mb-4 text-justify">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-600 dark:text-white">
          💪 먼저 저에 대해 소개 합니다!
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-white">
          저는 새로운걸 늘 새로워하는 개발자 입니다. Spring Framework로 주로
          일을 했으며 사내 웹 개발에 업무를 담당하다가 사용자 우선 웹 개발
          업무를 담당하면서 Front-end 개발에 빠져서 현재 새롭게 공부하고
          있습니다.
        </p>
        <p className="text-sm sm:text-base text-gray-600 dark:text-white">
          아직은 작은 목표이지만 저만의 개발 블로그를 만들어 제가 느끼는
          최대한의 지식을 표출하고 싶습니다. 협업을 중요시하며 사람들과 어울려
          지내는걸 많이 좋아합니다. 현재 하나의 축구모임의 회장을 담당하고
          있습니다.
        </p>
      </div>
    </div>
  );
};

export default AuthorIntro;

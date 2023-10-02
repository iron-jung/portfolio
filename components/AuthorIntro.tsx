import React from "react";

const AuthorIntro = () => {
  return (
    <div className="mb-6">
      <h2 className="mt-6 text-xl sm:text-4xl text-gray-600 font-bold capitalize dark:text-white">
        <p>👋 안녕하세요! Iron.j 입니다!</p>
      </h2>
      <div className="mt-8 mb-4 text-justify">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-600 dark:text-white">
          💪 먼저 저에 대해 소개 합니다!
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-white">
          저는 새로운걸 늘 새로워하는 개발자 입니다. 새로운 개발에 흥미를 많이
          느끼는 편입니다. 또한, 개발 트랜드에 대해 호기심이 많고 직접
          적용해보는걸 흥미있게 느낍니다.
        </p>
        <p className="text-sm sm:text-base text-gray-600 dark:text-white">
          이해함의 바탕으로 적용해나가며 어려운 문제에 직면했을때도 최대한
          해결하려고 노력합니다. 노력된 결과에 대한 많은 희열을 느끼고 그 노력에
          대한 다른 사람의 피드백에도 최대한 아낌없이 들으려 노력합니다. 과거에
          반복된 개발에 대해 아쉬움을 느끼고 Front-End 개발에 눈을 뜸에 따라
          한가지씩 나만의 것으로 만들려고 노력중에 있습니다.
        </p>
        <p className="text-sm sm:text-base text-gray-600 dark:text-white">
          아직은 작은 목표이지만 저만의 개발 블로그를 만들어 제가 느끼는
          최대한의 지식을 표출하고 싶습니다. 협업을 중요시하며 사람들과 어울려
          지내는걸 많이 좋아합니다.
        </p>
      </div>
    </div>
  );
};

export default AuthorIntro;

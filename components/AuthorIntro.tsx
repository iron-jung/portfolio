import React from "react";

const AuthorIntro = () => {
  return (
    <div className="mb-6">
      <h2 className="mt-6 text-xl sm:text-4xl text-gray-600 font-bold capitalize dark:text-white">
        <p>👋 안녕하세요! Iron.j 입니다!</p>
      </h2>
      <div className="mt-8 mb-4 text-justify">
        <h2 className="mb-2 text-lg sm:text-2xl font-bold text-gray-600 dark:text-white">
          유연한 사고와 빠른 실행력으로 팀 내에서 긍정적인 영향을 주는 개발자 🧐
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-white">
          안녕하세요, 저는 Iron.J 입니다. 끊임없이 새로운 것을 탐색하며 개발에
          흥미를 느끼는 풀스택 및 백엔드 개발자입니다. 최신 트렌드에 대한 깊은
          호기심과 이를 직접 적용하는 데에서 오는 만족감이 저의 동력원입니다.
          어려운 문제에 직면했을 때도 이해를 바탕으로 최선의 해결책을 찾아내는
          것에 힘써왔습니다.
        </p>
        <p className="text-sm sm:text-base text-gray-600 dark:text-white">
          그 과정에서 얻은 성과와 다른 사람들로부터 받은 피드백이 제 성장을
          견인하는 중요한 요소라고 생각합니다. 과거의 반복적인 작업에서 벗어나,
          백엔드 개발 분야로 나아가며, 각 프로젝트를 나만의 것으로 만들어 가고
          있습니다.
        </p>
        <p className="text-sm sm:text-base text-gray-600 dark:text-white">
          아직은 작지만 목표인 자체 개발 블로그를 통해 제 지식을 나누고
          싶습니다. 협업과 소통을 중요시하며, 다양한 사람들과 함께 일하는 것이
          큰 기쁨입니다. 항상 배우려는 자세와열정으로 새로운 도전을 기다리고
          있습니다.
        </p>
      </div>
    </div>
  );
};

export default AuthorIntro;

interface MyTimeLineType {
  imgSrc: string;
  title: string;
  currently: boolean;
  fromAt: string;
  toAt: string;
  desc: string;
}

export const MyTimeLine: MyTimeLineType[] = [
  {
    imgSrc: "image/icon/company.svg",
    title: "알에스솔루션즈",
    currently: true,
    fromAt: "2022. 09",
    toAt: "2023. 10 예정",
    desc: "카카오모빌리티 주차 파트의 주차장 로컬 서버 신규 개발 및 카카오T 연동과 외부 연동, 주차장 로컬 서버 개발파트 개발 팀장으로 업무 진행",
  },
  {
    imgSrc: "image/icon/company.svg",
    title: "(주)코코아플러스",
    currently: false,
    fromAt: "2021. 07",
    toAt: "2022. 07",
    desc: "공공기관 사업(한국도로공사, 경찰청 도시교통센터)에 참여 Spring Framwork, IBatis, Oracle로 작업했으며 화면은 Jquery, vanilla JS로 작업 사용된 라이브러리 제한으로 DataTables JavaScript 라이브러리로 Grid 작업, RestAPI 개방 프로젝트에 기존 RestAPI 개방 로직의 복잡한 로직을 코드줄임 작업을 실현함 또한 회사 자체 개발 프로젝트에서 신규로 Vue.js 도입 Ionic Framwork로 안드로이드 앱 개발 Spring Boot, 복잡한 서버 배포에 Jenkins 도입으로 간편 배포를 실현함",
  },
  {
    imgSrc: "image/icon/company.svg",
    title: "(주)CX유니버스",
    currently: false,
    fromAt: "2020. 08",
    toAt: "2021. 04",
    desc: "(주)마이스터코리아 회사 업체명 변경, 첫 Front-End 프로젝트 작업 Node.js, React, Koa Framwork, MongoDB로 작업 공유주방 웹앱 프로젝트로 카카오 지도 라이브러리, Bootstrap 스타일 작업으로 진행함",
  },
  {
    imgSrc: "image/icon/company.svg",
    title: "(주)마이스터코리아",
    currently: false,
    fromAt: "2020. 04",
    toAt: "2020. 08",
    desc: "협력 관계 업체와 스마트팜 프로젝트를 설계받아서 화면 개발 작업 진행 주로 Spring Framwork, JQuery, MyBatis로 작업",
  },
  {
    imgSrc: "image/icon/company.svg",
    title: "(주)넥솔위즈빌",
    currently: false,
    fromAt: "2012. 02",
    toAt: "2020. 04",
    desc: "쉐보레 B2B 웹프로그램 유지보수/개발 참여 Spring Framwork 기반 프로젝트 주로 JQuery, IBatis, Oracle로 업무 진행 신규 개발보다는 유지보수 작업이 주 업무 Javascript 복잡하고 중복된 코드 통합을 작업한 이력이 있음",
  },
  {
    imgSrc: "image/icon/company.svg",
    title: "J&B 컴퍼니",
    currently: false,
    fromAt: "2011. 11",
    toAt: "2011. 12",
    desc: "신입 개발자로 입사 시작 Spring Framwork 프로젝트 강의 받고 SI 파견 투입",
  },
  {
    imgSrc: "image/icon/academy.svg",
    title: "오산대학교",
    currently: false,
    fromAt: "2007. 03",
    toAt: "2012. 02",
    desc: "오산대학교 멀티미디어계열과 졸업",
  },
];

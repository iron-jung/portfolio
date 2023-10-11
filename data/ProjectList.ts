export interface ProjectType {
  realSrc: string | undefined;
  githubSrc: string | undefined;
  title: string;
  desc: string;
  company: string;
  fromAt: string;
  toAt: string;
  language: string[] | undefined;
  toyProject: boolean;
  isHidden: boolean;
}

export const ProjectList: ProjectType[] = [
  {
    realSrc: "https://parking.kakao.com/#section_solution",
    githubSrc: "",
    title: "FC 풋도그 공식 사이트 개발",
    desc: "현재 운영중인 축구팀 공식사이트 개발 구글캘린더, 유투브, 밴드 API를 이용하여 팀에 관련된 메타데이터 사용 Vercel을 이용하여 Serverless 방식으로 API 연계 Prettier, EsLint 이용하여 코드 규격에 힘씀",
    company: "",
    fromAt: "2022. 06",
    toAt: "2022. 07",
    language: [
      "React",
      "Tailwind",
      "Redux",
      "Youtube API",
      "Band API",
      "Vercel",
      "Fullcalender",
    ],
    toyProject: false,
    isHidden: true,
  },
  {
    realSrc: "",
    githubSrc: "",
    title: "KICT 현장조사 관리자 사이트 및 사용자 어플 개발",
    desc: "SpringBoot Json Web Token 신규 셋팅 개발 Spring Mobile 라이브러리를 이용하여 접속 기기 선별 후 어플 또는 관리자 페이지로 이동 시키는 작업으로 사용자 접속 혼동을 막음 기존에 없던 Jenkins 자동배포 시스템 추가로 유지보수 용이성에 기여함 Git 도입으로 버전관리에 기여함",
    company: "(주)코코아플러스",
    fromAt: "2022. 01",
    toAt: "2022. 03",
    language: [
      "Java",
      "SpringBoot",
      "JQuery",
      "JavaScript",
      "MyBatis",
      "Postgre",
      "Bootstrap",
      "Cordova",
      "Jenkins",
      "Apache",
      "Git",
    ],
    toyProject: false,
    isHidden: false,
  },
  {
    realSrc: "",
    githubSrc: "",
    title: "한국도로공사 시범지사 플랫폼(차량관리)",
    desc: "한국도로공사 인트라넷 사이트 개발 기존 구형 사이트를 신규 플랫폼으로 이전 정해진 Publisher로 이용해 화면 추가 개발",
    company: "(주)코코아플러스",
    fromAt: "2022. 01",
    toAt: "2022. 03",
    language: [
      "Java",
      "Spring",
      "JQuery",
      "JavaScript",
      "MyBatis",
      "Oracle",
      "SVN",
    ],
    toyProject: false,
    isHidden: false,
  },
  {
    realSrc: "http://www.utic.go.kr",
    githubSrc: "",
    title: "경찰청 도시교통센터 웹 추가 개발 및 유지보수",
    desc: "기존 사이트에서 추가 개발 요청건 작업 오픈 RestAPI 개방 및 업무 화면 개발 기존 배치 로직 간소화로 유지보수 용이성 추가",
    company: "(주)코코아플러스",
    fromAt: "2021. 07",
    toAt: "2021. 12",
    language: [
      "Java",
      "Spring",
      "JQuery",
      "JavaScript",
      "IBatis",
      "Oracle",
      "SVN",
    ],
    toyProject: false,
    isHidden: false,
  },
  {
    realSrc: "",
    githubSrc: "",
    title: "공유주방 웹 개발",
    desc: "회사명 변경과 동시에 신규 자체 개발 프로젝트 착수 공유주방에 관련된 설계, 개발 작업 1인 작업으로 어려움이 많았지만 회사 요청에 대해 최대한 마무리 지음 카카오 지도 연계와 MongoDB, Koa로 자체 서버에 설정 및 개발 Multer middleware로 이용하여 사진 파일 작업",
    company: "(주)CX유니버스",
    fromAt: "2020. 05",
    toAt: "2021. 04",
    language: ["Node.js", "Koa", "MongoDB", "React", "GitLab", "Git"],
    toyProject: false,
    isHidden: false,
  },
  {
    realSrc: "",
    githubSrc: "",
    title: "협력업체 스마트팜 프로젝트",
    desc: "협력 업체 스마트팜 프로젝트를 받아서 개발 신입 개발자들을 알려주면서 화면 개발 기존 협력업체 개발의 규칙이 정해져 추가적인 작업이 어려움",
    company: "(주)마이스터코리아",
    fromAt: "2020. 03",
    toAt: "2020. 08",
    language: [
      "Java",
      "Spring",
      "JQuery",
      "JavaScript",
      "IBatis",
      "MariaDB",
      "SVN",
      "BootStrap",
      "w2ui",
      "Cordova",
    ],
    toyProject: false,
    isHidden: false,
  },
  {
    realSrc: "https://play.google.com/store/apps/details?id=com.wizvil.vlsp",
    githubSrc: "",
    title: "쉐보레 물류시스템 PDA 안드로이드 웹앱 개발",
    desc: "쉐보레 물류시스템 웹 개발과 동시에 PDA 안드로이드 웹앱 개발 PDA 바코드 태그 연동 기존 업무에 바코드 연동 프로세서가 없어서 신규 개발 Cordova Plugin을 통한 연동 작업",
    company: "(주)넥솔위즈빌",
    fromAt: "2020. 01",
    toAt: "2020. 03",
    language: [
      "Java",
      "Spring",
      "JQuery",
      "JavaScript",
      "IBatis",
      "Oracle",
      "SVN",
      "BootStrap",
      "DataTable",
      "Cordova",
    ],
    toyProject: false,
    isHidden: false,
  },
  {
    realSrc: "https://vlsp.gmsnet.co.kr/",
    githubSrc: "",
    title: "쉐보레 물류시스템 웹 개발",
    desc: "기존 PowerBuilder로 개발된 시스템을 웹으로 마이그래이션과 신규 화면 개발 추가로 본사 물류 업무를 위해 PDA 도입에 대한 RestAPI 개발 자체 개발 Grid의 한계로 DataTables 라이브러리 채택 Grid 사용에 대한 전역 객체 생성에 힘씀",
    company: "(주)넥솔위즈빌",
    fromAt: "2020. 01",
    toAt: "2020. 03",
    language: [
      "Java",
      "Spring",
      "JQuery",
      "JavaScript",
      "IBatis",
      "Oracle",
      "SVN",
      "BootStrap",
      "DataTable",
    ],
    toyProject: false,
    isHidden: false,
  },
  {
    realSrc: "",
    githubSrc: "",
    title: "쉐보레 서비스센터 고객관리 웹앱 개발",
    desc: "쉐보레 고객데이터로 이용한 서비스센터 고객관리 안드로이드 웹앱 개발 첫 웹앱인 만큼 다양한 라이브러리 채택에 힘씀 메시지 전송을 위해 FCM사용 기존 서비스 데이터를 이용한 RestAPI 전송 적용",
    company: "(주)넥솔위즈빌",
    fromAt: "2019. 01",
    toAt: "2019. 10",
    language: [
      "Java",
      "Spring",
      "JQuery",
      "JavaScript",
      "IBatis",
      "Oracle",
      "SVN",
      "Cordova",
      "PhoneGep",
      "FCM(Firebase Cloud Message)",
    ],
    toyProject: false,
    isHidden: false,
  },
  {
    realSrc: "https://cadillac.gmsnet.co.kr/",
    githubSrc: "",
    title: "캐딜락 정비/부품 서비스센터 내부 인트라넷 시스템 개발 및 유지보수",
    desc: "기존 쉐보레 웹 프로젝트 복제 캐딜락 본사를 통해 기존 데이터 마이그레이션 작업 기존 로직을 1/3 가량 줄이는데 노력함 중복코드를 걷어내는 작업을 최대한 하여 유지보수 용이성에 기여함",
    company: "(주)넥솔위즈빌",
    fromAt: "2017. 01",
    toAt: "2019. 01",
    language: [
      "Java",
      "Spring",
      "JQuery",
      "JavaScript",
      "IBatis",
      "Oracle",
      "SVN",
    ],
    toyProject: false,
    isHidden: false,
  },
  {
    realSrc: "https://www.gmsnet.co.kr",
    githubSrc: "",
    title: "쉐보레 서비스센터 내부 인트라넷 시스템 유지보수",
    desc: "웹 인트라넷 유지보수 담당. 쉐보레 본사와 서비스센터간의 B2B 웹 인트라넷이며 차량 정비에 대한 보증청구 로직, 일반 정비 프로세서가 주목적 기존 Grid 시스템에 대한 복잡하고 중복된 로직을 통합하여 협력함",
    company: "(주)넥솔위즈빌",
    fromAt: "2013. 03",
    toAt: "2017. 01",
    language: [
      "Java",
      "Spring",
      "JQuery",
      "JavaScript",
      "IBatis",
      "Oracle",
      "SVN",
    ],
    toyProject: false,
    isHidden: false,
  },
  {
    realSrc: "https://fcfootdog.vercel.app/",
    githubSrc: "https://github.com/jungChulOh/foot-dog-info",
    title: "FC 풋도그 공식 사이트 개발",
    desc: "현재 운영중인 축구팀 공식사이트 개발 구글캘린더, 유투브, 밴드 API를 이용하여 팀에 관련된 메타데이터 사용 Vercel을 이용하여 Serverless 방식으로 API 연계 Prettier, EsLint 이용하여 코드 규격에 힘씀",
    company: "",
    fromAt: "2022. 06",
    toAt: "2022. 07",
    language: [
      "React",
      "Tailwind",
      "Redux",
      "Youtube API",
      "Band API",
      "Vercel",
      "Fullcalender",
    ],
    toyProject: true,
    isHidden: false,
  },
];

import {Grade, Session, Sponsor, Track} from "@constants/types";

export const sessionList: Session[] = [
  {
    title: 'B2B서비스에서 iframe을 이용한 service integration 개발기',
    description: '프론트엔드 개발자로서 실제 운영되고 있는 B2B 서비스에, iframe integration을 구현하기 위한 노력들을 담은 개발기입니다.\n' +
      '다루기 조금 까다롭지만, 잘 이용하면 재밌는 기능을 만들 수 있는 iframe, 제 발표를 통해 좀 더 친해져 보는 것은 어떨까요?',
    track: Track.A,
    startTime: '13:50',
    endTime: '14:30',
    speaker: {
      name: '나윤환',
      company: 'Sendbird',
      role: 'Frontend Engineer',
    },
  },
  {
    title: '당근마켓은 왜 Relay를 선택했을까? (Relay, 그리고 Declarative에 대해 다시 생각하기)',
    description: '본 발표에서는 당근마켓의 두번째 탭(내근처)을 웹으로 전환하게 된 계기와 내근처 탭을 구성하는 기술적 기반인 Relay와 GraphQL 클라이언트 스키마에 대해 소개합니다. 또한 Relay를 제품에 실제로 적용하면서 경험한 장점과 단점, 그리고 최종적으로 왜 Relay가 React의 마지막 퍼즐 조각인지 깨달은 바를 공유합니다.',
    track: Track.A,
    startTime: '14:40',
    endTime: '15:20',
    speaker: {
      name: '원지혁',
      company: '당근마켓',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'Dark Mode in WebView',
    description: '최근 들어 각 OS에 다크모드가 탑재되면서 다크모드에 대한 관심이 높아지고 있습니다. 웹에서의 다크모드는 비교적 어렵지 않게 구현할 수 있지만, 앱안의 웹뷰에서의 다크모드는 조금 다릅니다. 토스에서 이런 웹 서비스들에 대한 다크모드를 구현하는 과정에서 만났던 문제들과 해결방법에 대해서 다뤄봅니다.',
    track: Track.A,
    startTime: '15:30',
    endTime: '16:10',
    speaker: {
      name: '이현섭',
      company: 'Toss Payments',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'TDD by React',
    description: '브라우저에서 오직 눈으로만 결과물을 확인하고 계신가요? 그것만으론 불안해서 테스트 코드를 작성해보려 했지만 어려움을 겪어 보셨다면 주목해주세요. React에서 테스트 가능한 코드 작성법을 알아보고 프론트엔드 개발에 TDD를 적용하는 방법을 소개합니다.',
    track: Track.A,
    startTime: '16:30',
    endTime: '17:10',
    speaker: {
      name: '최수형',
      company: 'microprotect',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'Chrome DevTools Protocol을 활용하여 Debugger 개발하기',
    description: 'Chrome DevTools Protocol을 활용하면 Chrome 개발자 도구를 확장할 수 있고, VS Code 디버거와 같은 커스텀 디버거를 개발할 수 있습니다. NAVER Lambda Serverless Platform의 디버거 개발 경험을 바탕으로 Protocol 기초 사용법과 사례를 공유하고 활용 인사이트를 제공하고자 합니다.',
    track: Track.A,
    startTime: '17:20',
    endTime: '18:00',
    speaker: {
      name: '심흥운',
      company: 'NAVER',
      role: 'Frontend Developer',
    },
  },
  {
    title: '물류 백오피스 개발 삽질기 (feat. 상태관리)',
    description: '최근에 물류 백오피스를 만들면서 많은 Input들을 다뤄야 했습니다. 작업을 진행하면서 Context API만으로 작업을 시작했고 퍼포먼스 문제에 부딪혔습니다. 해당 문제를 해결하기 위해서 어떤 시행착오를 겪고 어떻게 해결했는 지를 경험담을 공유하고자 합니다. 또한 스스로 무의식적으로 사용하던 상태관리 라이브러리의 최적화 방안에 대해서 소개합니다.',
    track: Track.A,
    startTime: '18:10',
    endTime: '18:40',
    speaker: {
      name: '김성현',
      company: 'tPay',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'hwp.js 개발기',
    description: 'hwp.js를 만들면서 배운점을 공유합니다. JS로 바이너리 파일을 다룰 수 있을까요? ',
    track: Track.B,
    startTime: '13:50',
    endTime: '14:30',
    speaker: {
      name: '이한',
      company: 'Toss',
      role: 'Frontend Developer',
    },
  },
  {
    title: '스타트업에서 리액트기반의 scss 활용기',
    description: '스타트업에서 리액트 기반으로 scss를 쓰고 있는 사람이 쓰는 활용기입니다. \n' +
      '간편하게 미디어쿼리를 쓰는 고민,\n' +
      '반복되는 코드를 줄이고 싶은 고민, 확장성있는 mixin에 대한 고민등이 묻어있는 사스의 매력에 빠진 퍼블리셔의 이야기입니다.',
    track: Track.B,
    startTime: '14:40',
    endTime: '15:20',
    speaker: {
      name: '이경주',
      company: '',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'REST냐, gRPC냐, GraphQL이냐 그것이 문제로다.',
    description: '최근 몇 년 사이 사용자가 많아지고 비지니스가 복잡해짐에 따라 시스템에 마이크로서비스 아키텍처를 적용하는 회사들이 많아졌습니다. BFF(Backend for Frontend) 패턴을 사용해서 API 게이트웨이를 구성하는 경우도 많아졌구요. 이에 따라 프론트엔드 입장에서도 어떻게 API를 구성하는 것이 좋을지에 대한 (즐거운) 고민도 함께 많아졌습니다.\n' +
      '이 세션에서는 버즈빌에서 마이크로서비스 아키텍처 기반의 백엔드와 프론트엔드 사이의 통신을 위해 REST API(+ OpenAPI), gRPC, GraphQL을 적용해 본 경험을 공유합니다. 프론트엔드 관점에서 각 프로토콜의 API 레지스트리를 구성하여 API 정의를 관리한 방법을 설명하고, 프로토콜 별로 적용하면서 겪었던 어려운 점들과 프로토콜 간 장단점을 비교합니다.',
    track: Track.B,
    startTime: '15:30',
    endTime: '16:10',
    speaker: {
      name: '이성원',
      company: 'Buzzvil',
      role: 'Chief Architect',
    },
  },
  {
    title: 'OpenAPI Specification으로 타입 세이프하게 API 개발하기 - 희망편 vs 절망편',
    description: 'GraphQL 등 좋은 기술에도 불구하고, 서버에서 RESTful API를 제공하는 경우가 여전히 많습니다. 서버와 클라이언트가 API 명세를 효과적으로 공유할 수 있는 방법인 OpenAPI Specification을 알아보고, 이를 활용해 타입 세이프한 API 클라이언트를 만들고 개발 과정을 개선하는 방법을 실제 사례와 함께 알아봅니다.',
    track: Track.B,
    startTime: '16:30',
    endTime: '17:10',
    speaker: {
      name: '최태건',
      company: 'MESH KOREA',
      role: 'Frontend Developer',
    },
  },
  {
    title: '리액트네이티브로 핀치줌 구현하기',
    description: '핀치줌을 직접 구현한 경험을 바탕으로 발표시간 동안 처음부터 같이 구현해보는 시간을 가질 예정입니다. 여기서 구현한 방법이 최적의 방법이 아닐 수 있다고 생각합니다. 하지만 구현하는 과정을 통해서 ReactNative 의 panResponder 나 Animated 에 대한 이해가 깊어졌고 더 잘 사용할 수 있게 되었습니다. ',
    track: Track.B,
    startTime: '17:20',
    endTime: '18:00',
    speaker: {
      name: '최종택',
      company: 'dooboolab',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'Statecharts: 복잡한 UI 상태를 지배하는 방법',
    description: '데브시스터즈에서 다양한 웹 서비스를 개발하면서 다뤘던 크고 작은 상태, 이런 상태들을 효과적으로 관리하고 설명하기 위한 훌륭한 멘탈모델이 되어준 Harel statecharts에 대해서 소개합니다.',
    track: Track.B,
    startTime: '18:10',
    endTime: '18:40',
    speaker: {
      name: '김혜성',
      company: 'Devsisters',
      role: 'Frontend Developer',
    },
  },
]

export const sponsorList: Sponsor[] = [
  {
    name: '비바리퍼블리카',
    link: 'https://toss.im/career',
    image: 'toss@2x.png',
    grade: Grade.Diamond,
  },
  {
    name: '우아한테크코스',
    link: 'https://woowacourse.github.io',
    image: 'wooahan-tech@2x.png',
    grade: Grade.SpaceProvider,
  },
  {
    name: '네이버',
    link: 'https://www.navercorp.com',
    image: 'naver@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'coupang',
    link: 'http://ncsoft.com',
    image: 'coupang@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'class101',
    link: 'https://class101.net/',
    image: 'class-101@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'ejn',
    link: 'https://ejn.kr/',
    image: 'ejn@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: '당근마켓',
    link: 'https://www.daangn.com/',
    image: 'carrot@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'buzzvil',
    link: 'https://www.buzzvil.com',
    image: 'buzzvil@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'ncsoft',
    link: 'http://ncsoft.com',
    image: 'nc@2x.png',
    grade: Grade.Platinum,
  },
];

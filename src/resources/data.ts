import {Grade, Session, Sponsor, Track} from "@constants/types";

export const sessionList: Session[] = [
  {
    title: '[Keynote] FEConf2020 at home',
    description: '',
    track: Track.A,
    startTime: '13:30',
    endTime: '13:45',
    speaker: {
      name: '김태훈',
      company: 'FEConf',
      role: 'Organizer',
    },
    noDetail: true,
  },
  {
    title: '웹뷰에서 다크모드 상속받기: 일관성있는 사용자 경험을 위하여',
    description: '최근 들어 각 OS에 다크모드가 탑재되면서 다크모드에 대한 관심이 높아지고 있습니다. 웹에서의 다크모드는 어렵지 않게 구현할 수 있지만, 앱 내 웹뷰에서의 다크모드는 비교적 간단하지 않습니다. 다크모드를 어떻게 구현했는지, 그리고 구현하는 과정에서 만났던 문제를 어떻게 해결했는지 다뤄봅니다.',
    track: Track.A,
    startTime: '13:50',
    endTime: '14:30',
    speaker: {
      name: '이현섭',
      company: 'Toss Payments',
      role: 'Frontend Developer',
      imagePosition: '50% 40%',
    },
  },
  {
    title: 'Relay, 그리고 Declarative에 대해 다시 생각하기',
    description: '본 발표에서는 당근마켓의 두번째 탭(내근처)을 웹으로 전환하게 된 계기와 내근처 탭을 구성하는 기술적 기반인 Relay와 GraphQL 클라이언트 스키마에 대해 소개합니다. 또한 Relay를 제품에 실제로 적용하면서 경험한 장점과 단점, 그리고 최종적으로 왜 Relay가 React의 마지막 퍼즐 조각인지 깨달은 바를 공유합니다.',
    track: Track.A,
    startTime: '14:40',
    endTime: '15:20',
    speaker: {
      name: '원지혁',
      company: '당근마켓',
      role: 'Frontend Developer',
      imagePosition: '50% 42%',
    },
  },
  {
    title: '한글 파일로부터 우리를 구원해줄 hwp.js',
    description: '한글 파일을 읽고 렌더링하려는 여러번의 시도가 있었습니다.\n' +
      'hwp.js는 크로스 플렛폼 리더, 뷰어를 구현하기위해 웹기술을 이용해 한글 파일을 읽고 렌더링하는 프로젝트 입니다. \n' +
      'hwp.js를 만들며 배운 브라우저에서 바이너리 파일을 다루는법, 폰트와 절대단위 프린트 속성등을 공유하고자 합니다.',
    track: Track.A,
    startTime: '15:30',
    endTime: '16:10',
    speaker: {
      name: '이한',
      company: 'Toss',
      role: 'Frontend Developer',
    },
  },
  {
    title: 'OpenAPI Specification으로 타입 세이프하게 API 개발하기 - 희망편 vs 절망편',
    description: 'GraphQL 등 좋은 기술이 많이 나왔음에도 불구하고, 여전히 서버에서 RESTful API로만 작업되는 경우가 많습니다. 서버와 클라이언트가 API 명세를 효과적으로 공유할 수 있는 방법인 OpenAPI Specification을 알아보고, 이를 활용해 타입 세이프한 API 클라이언트를 만들고 개발 과정을 개선하는 방법을 실제 사례와 함께 알아봅니다.',
    track: Track.A,
    startTime: '16:30',
    endTime: '17:10',
    speaker: {
      name: '최태건',
      company: 'MESH KOREA',
      role: 'Frontend Developer',
      imagePosition: '50% 30%',
    },
  },
  {
    title: '프론트엔드에서 TDD가 가능하다는 것을 보여드립니다.',
    description: '브라우저에서 오직 눈으로만 결과물을 확인하고 계신가요? 그것만으론 불안해서 테스트 코드를 작성해보려 했지만 어려움을 겪어 보셨다면 주목해주세요. React에서 테스트 가능한 코드 작성법을 알아보고 프론트엔드 개발에 TDD를 적용하는 방법을 소개합니다.',
    track: Track.A,
    startTime: '17:20',
    endTime: '18:00',
    speaker: {
      name: '최수형',
      company: 'Microprotect',
      role: 'Frontend Developer',
      imagePosition: '50% 30%',
    },
  },
  {
    title: 'Statecharts: 복잡한 UI 상태를 지배하는 방법',
    description: '데브시스터즈에서 다양한 웹 서비스를 개발하면서 다뤘던 크고 작은 상태, 이런 상태들을 효과적으로 관리하고 설명하기 위한 훌륭한 멘탈모델이 되어준 Harel statecharts에 대해서 소개합니다.',
    track: Track.A,
    startTime: '18:10',
    endTime: '18:40',
    speaker: {
      name: '김혜성',
      company: 'Devsisters',
      role: 'Frontend Developer',
      imagePosition: '50% 80%',
    },
  },

  {
    title: '[Sponsor] 진짜 궁금해? 토스팀 개발자들의 리얼토크',
    description: '',
    track: Track.B,
    startTime: '13:30',
    endTime: '13:45',
    speaker: {
      name: 'Toss',
      company: 'Frontend Chapter',
      role: '',
    },
    noDetail: true,
  },
  {
    title: '확장 가능한 CSS를 재사용하여 스타일링하기',
    description: 'Sass, 어떻게 사용해야 잘 사용하는 걸까요\n' +
      '미디어 쿼리 간편하게 쓰기, 반복되는 코드 줄이기, 확장성있는 mixin 등에 대한 고민이 묻어있는 Sass의 매력에 빠진 퍼블리셔의 이야기입니다.',
    track: Track.B,
    startTime: '13:50',
    endTime: '14:30',
    speaker: {
      name: '이경주',
      company: '',
      role: 'Frontend Developer',
      imagePosition: '50% 30%',
    },
  },
  {
    title: '프런트엔드를 위한 API 프로토콜, REST만이 답은 아니다. (with. gRPC, GraphQL)',
    description: '이 세션에서는 버즈빌에서 마이크로서비스 아키텍처 기반의 백엔드와 프론트엔드 사이의 통신을 위해 REST API(+ OpenAPI), gRPC, GraphQL을 적용해 본 경험을 공유합니다. 프론트엔드 관점에서 각 프로토콜의 API 레지스트리를 구성하여 API 정의를 관리한 방법을 설명하고, 프로토콜 별로 적용하면서 겪었던 어려운 점들과 프로토콜 간 장단점을 비교합니다.',
    track: Track.B,
    startTime: '14:40',
    endTime: '15:20',
    speaker: {
      name: '이성원',
      company: 'Buzzvil',
      role: 'Chief Architect',
    },
  },
  {
    title: 'iframe을 활용하여 외부 Service를 통합하기',
    description: '프론트엔드 개발자로서 실제 운영되고 있는 B2B 서비스에 iframe integration을 구현하기 위한 노력을 담은 개발기입니다.\n'+
    '다루기 조금 까다롭지만, 잘 이용하면 재밌는 기능을 만들 수 있는 iframe.\n'+
    '제 발표를 통해 좀 더 친해져 보는 것은 어떨까요?',
    track: Track.B,
    startTime: '15:30',
    endTime: '16:10',
    speaker: {
      name: '나윤환',
      company: 'Sendbird',
      role: 'Frontend Engineer',
      imagePosition: '50% 27%',
    },
  },
  {
    title: 'React Native에서 Pinch Zoom을 구현하면서 배운것들',
    description: '핀치줌을 직접 구현한 경험을 바탕으로 발표시간 동안 처음부터 같이 구현해보는 시간을 가질 예정입니다. 여기서 구현한 방법이 최적의 방법이 아닐 수 있다고 생각합니다. 하지만 구현하는 과정을 통해서 ReactNative 의 panResponder 나 Animated 에 대한 이해가 깊어졌고 더 잘 사용할 수 있게 되었습니다. ',
    track: Track.B,
    startTime: '16:30',
    endTime: '17:10',
    speaker: {
      name: '최종택',
      company: 'dooboolab',
      role: 'Frontend Developer',
      imagePosition: '50% 10%',
    },
  },
  {
    title: 'Chrome DevTools Protocol을 활용하여 Debugger 개발하기',
    description: 'Chrome DevTools Protocol을 활용하면 Chrome 개발자 도구를 확장할 수 있고, VS Code 디버거와 같은 커스텀 디버거를 개발할 수 있습니다. NAVER Lambda Serverless Platform의 디버거 개발 경험을 바탕으로 Protocol 기초 사용법과 사례를 공유하고 활용 인사이트를 제공하고자 합니다.',
    track: Track.B,
    startTime: '17:20',
    endTime: '18:00',
    speaker: {
      name: '심흥운',
      company: 'NAVER',
      role: 'Frontend Developer',
      imagePosition: '50% 30%',
    },
  },
  {
    title: '복잡한 백오피스에서 Form의 상태 다루기',
    description: '최근에 물류 백오피스를 만들면서 많은 Input들을 다뤄야 했습니다. 작업을 진행하면서 Context API만으로 작업을 시작했고 퍼포먼스 문제에 부딪혔습니다. 해당 문제를 해결하기 위해서 어떤 시행착오를 겪고 어떻게 해결했는 지를 경험담을 공유하고자 합니다. 또한 스스로 무의식적으로 사용하던 상태관리 라이브러리의 최적화 방안에 대해서 소개합니다.',
    track: Track.B,
    startTime: '18:10',
    endTime: '18:40',
    speaker: {
      name: '김성현',
      company: 'tPay',
      role: 'Frontend Developer',
      imagePosition: '50% 30%',
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
    name: '우아한형제들',
    link: 'https://www.woowahan.com/',
    image: 'woowahan@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: '당근마켓',
    link: 'https://www.daangn.com/',
    image: 'carrot@2x.png',
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
    name: 'buzzvil',
    link: 'https://www.buzzvil.com',
    image: 'buzzvil@2x.png',
    grade: Grade.Platinum,
  },
  {
    name: 'mesh korea',
    link: 'https://meshkorea.net/kr/index.html',
    image: 'meshkorea@2x.png',
    grade: Grade.Gold,
  },
  {
    name: 'sendbird',
    link: 'https://sendbird.com/',
    image: 'sendbird@2x.png',
    grade: Grade.Gold,
  },
  {
    name: 'ncsoft',
    link: 'http://ncsoft.com',
    image: 'nc@2x.png',
    grade: Grade.Gold,
  },
  {
    name: '우아한테크코스',
    link: 'https://woowacourse.github.io',
    image: 'wooahan-tech@2x.png',
    grade: Grade.SpaceProvider,
  },
];

import type { IButtons, ICourseData, ICoursePageMembersData, IEventBoxItem, IOurDirectData, IOurTeamData, IPostsData, ITeamMembers, IPostBlogData, IEventsDataBlock, IEventsData } from "./types/interfaces.js";

export const courseData: ICourseData[] = [
  {
    src: 'src/assets/main-images/man-1.png',
    theme: 'Marketing',
    title: 'The Ultimate Google Ads Training Course',
    price: '$100',
    after: ' | by Jerome Bell',
    color: '#03CEA4',
  },
  {
    src: 'src/assets/main-images/man-4.png',
    theme: 'Management',
    title: 'Product Management Fundamentals',
    price: '$480',
    after: ' | by Marvin McKinney',
    color: '#5A87FC',
  },
  {
    src: 'src/assets/main-images/man-2.png',
    theme: 'HR & Recruiting',
    title: 'HR Management and Analytics',
    price: '$200',
    after: ' | by Leslie Alexander Li',
    color: '#F89828',
  },
  {
    src: 'src/assets/main-images/man-5.png',
    theme: 'Marketing',
    title: 'Brand Management & PR Communications',
    price: '$530',
    after: ' | by Kristin Watson',
    color: '#03CEA4',
  },
  {
    src: 'src/assets/main-images/man-3.png',
    theme: 'Management',
    title: 'Business Development Management',
    price: '$400',
    after: ' | by Dianne Russell',
    color: '#5A87FC',
  },
  {
    src: 'src/assets/main-images/man-6.png',
    theme: 'Design',
    title: 'Graphic Design Basic',
    price: '$500',
    after: ' | by Guy Hawkins',
    color: '#F52F6E',
  },
];

export const buttons: IButtons[] = [
{
  title: 'Experienced Tutors',
  image: 'src/assets/icons/course-star.svg',
  imageRed: 'src/assets/icons/course-star-red.svg',
},
{
  title: 'Feedback & Support',
  image: 'src/assets/icons/course-like.svg',
  imageRed: 'src/assets/icons/course-like-red.svg',
},
{
  title: '24/7 Online Library',
  image: 'src/assets/icons/course-layouts.svg',
  imageRed: 'src/assets/icons/course-layout-red.png',
},
{
  title: 'Community',
  image: 'src/assets/icons/course-chat.svg',
  imageRed: 'src/assets/icons/course-chat-red.svg',
},
];

export const eventBoxItem: IEventBoxItem[] = [
{
  day: '05',
  month: 'August',
  time: '11:00 – 14:00',
  text: 'Formation of the organizational structure of the company in the face of uncertainty.',
  about: 'Online master-class',
},
{
  day: '24',
  month: 'July',
  time: '11:00 – 12:30',
  text: 'Building a customer service department. Best Practices.',
  about: 'Online lecture',
},
{
  day: '16',
  month: 'July',
  time: '10:00 – 13:00',
  text: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
  about: 'Online workshop',
},
]

export const teamMembers: ITeamMembers[] = [
  {
    imageSrc: 'src/assets/main-images/course-member-2.png',
    name: 'Dianne Russell',
    role: 'Founder and CEO',
  },
  {
    imageSrc: 'src/assets/main-images/course-member-3.png',
    name: 'Jerome Bell',
    role: 'Founder and Program Director',    
  },
  {
    imageSrc: 'src/assets/main-images/course-member-1.png',
    name: 'Kristin Watson',
    role: 'Marketer, Curator of Marketing Course',    
  },
  {
    imageSrc: 'src/assets/main-images/course-member-4.png',
    name: 'Marvin McKinney',
    role: 'PM, Curator of Management Course',    
  }
]

export const teamSlierButtons: number[] = [0, 1, 2, 3, 4]

export const postsData: IPostsData[] = [
  {
    imgSrc: 'src/assets/main-images/posts-1.png',
    aboutTheme: 'Marketing',
    aboutDate: 'September 4, 2020',
    aboutTime: '36 min',
    theme: 'What is traffic arbitrage and does it really make money?',
    text: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
    link: 'Listen',
    separate: '|',
    showSeparate: true,
  },
  {
    imgSrc: 'src/assets/main-images/posts-2.png',
    aboutTheme: 'Management',
    aboutDate: 'August 25, 2020 ',
    aboutTime: '45 min',
    theme: 'What to do and who to talk to if you want to get feedback on the product',
    text: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...',
    link: 'Watch',
    separate: '|',
    showSeparate: true,
  },
  {
    imgSrc: 'src/assets/main-images/posts-3.png',
    aboutTheme: 'Design',
    aboutDate: 'August 8, 2020',
    theme: 'Should you choose a creative profession if you are attracted to creativity?',
    text: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
    link: 'Read',
    separate: '|',
  }
]

export const coursePageMembersData: ICoursePageMembersData[] = [
  {
    src: 'src/assets/main-images/course-page-member-1.png',
    theme: 'Marketing',
    title: 'The Ultimate Google Ads Training Course',
    price: '$100',
    after: ' | by Jerome Bell',
    color: '#03CEA4',
  },
  {
    src: 'src/assets/main-images/course-page-member-2.png',
    theme: 'Management',
    title: 'Product Management Fundamentals',
    price: '$480',
    after: ' | by Marvin McKinney',
    color: '#5A87FC',
  },
  {
    src: 'src/assets/main-images/course-page-member-3.png',
    theme: 'HR & Recruiting',
    title: 'HR Management and Analytics',
    price: '$200',
    after: ' | by Leslie Alexander Li',
    color: '#F89828',
  },
  {
    src: 'src/assets/main-images/course-page-member-4.png',
    theme: 'Marketing',
    title: 'Brand Management & PR Communications',
    price: '$530',
    after: ' | by Kristin Watson',
    color: '#03CEA4',
  },
  {
    src: 'src/assets/main-images/course-page-member-5.png',
    theme: 'Management',
    title: 'Business Development Management',
    price: '$400',
    after: ' | by Dianne Russell',
    color: '#5A87FC',
  },
  {
    src: 'src/assets/main-images/course-page-member-6.png',
    theme: 'Design',
    title: 'Graphic Design Basic',
    price: '$500',
    after: ' | by Guy Hawkins',
    color: '#F52F6E',
  },
  {
    src: 'src/assets/main-images/course-page-member-7.png',
    theme: 'Development',
    title: 'Highload Software Architecture',
    price: '$600',
    after: ' | by Brooklyn Simmons',
    color: '#7772F1',
  },
  {
    src: 'src/assets/main-images/course-page-member-8.png',
    theme: 'HR & Recruting',
    title: 'Human Resources – Selection and Recruitment',
    price: '$150',
    after: ' | by Kathryn Murphy',
    color: '#F89828',
  },
  {
    src: 'src/assets/main-images/course-page-member-9.png',
    theme: 'Design',
    title: 'User Experience. Human-centered Design',
    price: '$240',
    after: ' | by Cody Fisher',
    color: '#F52F6E',
  },
];

export const ourDirectData: IOurDirectData[] = [
  {
    imgSrc: 'src/assets/main-images/our-direct-1.png',
    name: 'Marketing',
    text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.',
    color: '#03CEA4 ',
  },
  {
    imgSrc: 'src/assets/main-images/our-direct-2.png',
    name: 'Management',
    text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.',
    color: '#5A87FC',
  },
  {
    imgSrc: 'src/assets/main-images/our-direct-3.png',
    name: 'HR & Recruting',
    text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.',
    color: '#F89828',
  },
  {
    imgSrc: 'src/assets/main-images/our-direct-4.png',
    name: 'Design',
    text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.',
    color: '#F52F6E',
  },
  {
    imgSrc: 'src/assets/main-images/our-direct-5.png',
    name: 'Development',
    text: 'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.',
    color: '#7772F1',
  },
]

export const ourTeamData: IOurTeamData[] = [
  {
    imageSrc: 'src/assets/main-images/our-team-1.png',
    name: 'Dianne Russell',
    role: 'Founder and CEO',
  },
  {
    imageSrc: 'src/assets/main-images/our-team-2.png',
    name: 'Jerome Bell',
    role: 'Founder and Program Director',
  },
  {
    imageSrc: 'src/assets/main-images/our-team-3.png',
    name: 'Kristin Watson',
    role: 'Marketer, Curator of Marketing Course',
  },
  {
    imageSrc: 'src/assets/main-images/our-team-4.png',
    name: 'Marvin McKinney',
    role: 'PM, Curator of Management Course',
  },
  {
    imageSrc: 'src/assets/main-images/our-team-5.png',
    name: 'Leslie Alexander Li',
    role: 'Curator of HR & Recruting Course',
  },
  {
    imageSrc: 'src/assets/main-images/our-team-6.png',
    name: 'Kathryn Murphy',
    role: 'Analyst and Marketing specialist',
  },
  {
    imageSrc: 'src/assets/main-images/our-team-7.png',
    name: 'Brooklyn Simmons',
    role: 'Curator of Development Course  ',
  },
  {
    imageSrc: 'src/assets/main-images/our-team-8.png',
    name: 'Cody Fisher',
    role: 'UX Designer, Curator of Design Course',
  },
]

export const reviewIcons: string[] = [
  'src/assets/icons/review-icon-1.png',
  'src/assets/icons/review-icon-2.png',
  'src/assets/icons/review-icon-3.png',
  'src/assets/icons/review-icon-4.png',
  'src/assets/icons/review-icon-5.png',
  'src/assets/icons/review-icon-6.png',
  'src/assets/icons/review-icon-7.png',
  'src/assets/icons/review-icon-8.png',
  'src/assets/icons/review-icon-9.png',
  'src/assets/icons/review-icon-10.png',
  'src/assets/icons/review-icon-11.png',
  'src/assets/icons/review-icon-12.png',
]

export const eventsData: IEventsData[] = [
  {
    day: '05',
    month: 'August',
    time: '11:00 – 14:00',
    text: 'Formation of the organizational structure of the company in the face of uncertainty.',
    about: 'Online master-class',
  },
  {
    day: '24',
    month: 'July',
    time: '11:00 – 12:30',
    text: 'Building a customer service department. Best Practices.',
    about: 'Online lecture',
  },
  {
    day: '16',
    month: 'July',
    time: '10:00 – 13:00',
    text: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
    about: 'Onine workshop',
  },  
  {
    day: '10',
    month: 'July',
    time: '10:00 – 13:00',
    text: 'Find and evaluate: search and assessment tools for candidates.',
    about: 'Onine workshop',
  },
  {
    day: '27',
    month: 'June',
    time: '10:00 – 13:00',
    text: 'Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.',
    about: 'Onine master-class',
  },
  {
    day: '15',
    month: 'June',
    time: '10:00 – 13:00',
    text: 'Marketing or growth hacking: main differences and what business needs.',
    about: 'Onine lecture',
  },
  {
    day: '02',
    month: 'June',
    time: '10:00 – 13:00',
    text: 'How to brief a client and present your design to approve it from the first show.',
    about: 'Onine lecture',
  },
  {
    day: '29',
    month: 'May',
    time: '10:00 – 13:00',
    text: 'Who is a project manager and do I want to be PM?',
    about: 'Onine lecture',
  },
  {
    day: '18',
    month: 'May',
    time: '10:00 – 13:00',
    text: "The company's business page as an additional tool to support the announcement of vacancies.",
    about: 'Onine lecture',
  },
]

export const eventsDataBlock: IEventsDataBlock[] = [
  {
    data: '05 Aug ',
    time: '11:00 – 14:00',
    text: 'Formation of the organizational structure of the company in the face of uncertainty.',
    about: 'Online master-class',
  },
    {
    data: '24 Jul',
    time: '11:00 – 14:00',
    text: 'Formation of the organizational structure of the company in the face of uncertainty.',
    about: 'Online master-class',
  },
  {
    data: '16 Jul',
    time: '11:00 – 14:00',
    text: 'Formation of the organizational structure of the company in the face of uncertainty.',
    about: 'Online master-class',
  },
  {
    data: '10 Jul',
    time: '11:00 – 14:00',
    text: 'Formation of the organizational structure of the company in the face of uncertainty.',
    about: 'Online master-class',
  },
  {
    data: '27 Jun',
    time: '11:00 – 14:00',
    text: 'Formation of the organizational structure of the company in the face of uncertainty.',
    about: 'Online master-class',
  },
  {
    data: '15 Jun',
    time: '11:00 – 14:00',
    text: 'Formation of the organizational structure of the company in the face of uncertainty.',
    about: 'Online master-class',
  },
  {
    data: '02 Jul',
    time: '11:00 – 14:00',
    text: 'Formation of the organizational structure of the company in the face of uncertainty.',
    about: 'Online master-class',
  },
  {
    data: '29 May',
    time: '11:00 – 14:00',
    text: 'Formation of the organizational structure of the company in the face of uncertainty.',
    about: 'Online master-class',
  },
  {
    data: '18 May',
    time: '11:00 – 14:00',
    text: 'Formation of the organizational structure of the company in the face of uncertainty.',
    about: 'Online master-class',
  },
]

export const postsBlogData: IPostBlogData[] = [
  {
    imgSrc: 'src/assets/main-images/blog-1.png',
    aboutTheme: 'Marketing',
    aboutDate: 'September 4, 2020',
    aboutTime: '36 min',
    theme: 'What is traffic arbitrage and does it really make money?',
    text: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
    link: 'Listen',
    separate: '|',
    showSeparate: true,
  },
  {
    imgSrc: 'src/assets/main-images/blog-2.png',
    aboutTheme: 'Development',
    aboutDate: 'September 1, 2020',
    theme: 'How to choose the first programming language for a beginner',
    text: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
    link: 'Read',
    separate: '|',
  },
  {
    imgSrc: 'src/assets/main-images/blog-3.png',
    aboutTheme: 'Design',
    aboutDate: 'August 8, 2020',
    aboutTime: '40 min',
    theme: 'Should you choose a creative profession if you are attracted to creativity?',
    text: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
    link: 'Watch',
    separate: '|',
    showSeparate: true,
  },
  {
    imgSrc: 'src/assets/main-images/blog-4.png',
    aboutTheme: 'HR & Recruting',
    aboutDate: 'August 3, 2020',
    theme: 'HR statistics: job search,  interviews, hiring and recruiting',
    text: 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
    link: 'Read',
    separate: '|',
  },
  {
    imgSrc: 'src/assets/main-images/blog-5.png',
    aboutTheme: 'Management',
    aboutDate: 'August 25, 2020 ',
    aboutTime: '45 min',
    theme: 'What to do and who to talk to if you want to get feedback on the product',
    text: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...',
    link: 'Watch',
    separate: '|',
    showSeparate: true,
  },
  {
    imgSrc: 'src/assets/main-images/blog-6.png',
    aboutTheme: 'Design',
    aboutDate: 'July 28, 2020',
    aboutTime: '36 min',
    theme: 'What are color profiles and how they work in graphic design',
    text: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
    link: 'Listen',
    separate: '|',
    showSeparate: true,
  },
  {
    imgSrc: 'src/assets/main-images/blog-7.png',
    aboutTheme: 'Management',
    aboutDate: 'July 15, 2020',
    aboutTime: '45 min',
    theme: 'Startup: how to build a team that will live longer than a year',
    text: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
    link: 'Watch',
    separate: '|',
    showSeparate: true,
  },
  {
    imgSrc: 'src/assets/main-images/blog-8.png',
    aboutTheme: 'Marketing',
    aboutDate: 'July 9, 2020',
    theme: 'How to get customers to love your business from the start',
    text: 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
    link: 'Read',
    separate: '|',
  },
]
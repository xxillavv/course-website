export interface ICourseData {
  src: string
  theme: string
  title: string
  price: string
  after: string
  color: string
}

export interface IButtons {
  title: string
  image: string
  imageRed: string
}

export interface IEventBoxItem {
  day: string
  month: string
  time: string
  text: string
  about: string
}

export interface ITeamMembers {
  imageSrc: string
  name: string
  role: string
}

export interface IPostsData {
  imgSrc: string
  aboutTheme: string
  aboutDate: string
  aboutTime?: string
  theme: string
  text: string
  link: string
  separate: string
  showSeparate?: boolean
}

export interface ICoursePageMembersData {
  src: string
  theme: string
  title: string
  price: string
  after: string
  color: string
}

export interface IOurDirectData {
  imgSrc: string
  name: string
  text: string
  color: string
}

export interface IOurTeamData {
  imageSrc: string
  name: string
  role: string
}

export interface IPostBlogData {
  imgSrc: string
  aboutTheme: string
  aboutDate: string
  aboutTime?: string
  theme: string
  text: string
  link: string
  separate: string
  showSeparate?: boolean
}

export interface IEventsDataBlock {
  data: string
  time: string
  text: string
  about: string
}

export interface IEventsData {
  day: string
  month: string
  time: string
  text: string
  about: string
}
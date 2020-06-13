import { IntlValue } from "../intl/Intl"

export interface Person {
  firstName: string
  lastName: string
  email: string
  twitter?: string
  linkedin?: string
  sections: Section[]
}

export interface Section {
  title: IntlValue
  items: Item[]
}

export interface Item {
  title: IntlValue
  description?: IntlValue
}

export interface Experience {
  startDate: Date
  endDate?: Date
  current?: boolean
  freelance: boolean
  title: IntlValue
  company: string
  place: string
  description: IntlValue
  technologies: Technology[]
}

export interface Technology {
  name: string
  icon: string
}

export interface Study {
  startDate: string
  endDate?: string
  current?: boolean
  studyTitle: IntlValue
  studyName: IntlValue
  place: string
  description?: IntlValue
}

export interface CvData {
  title: IntlValue
  person: Person
  studies: Study[]
  experiences: Experience[]
}

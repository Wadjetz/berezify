import type { IntlValue } from "./Intl"

export interface Person {
  firstName: string
  lastName: string
  email: string
  twitter?: string
  linkedin?: string
  github?: string
  website?: string
  description: IntlValue
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
  icon?: string
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
  skills: Skills
  projects: Project[]
}

export interface Skills {
  programmingLanguages: Skill[]
  languages: Skill[]
  libraries: Skill[]
  databases: Skill[]
  others: Skill[]
}

export interface Skill {
  title: IntlValue
  description?: IntlValue
  level?: number
}

export interface Project {
  title: string
  description?: IntlValue
  link?: string
  linkLabel?: string
  technologies: Technology[]
}

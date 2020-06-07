export interface Person {
  firstName: string
  lastName: string
  email: string
  twitter?: string
  linkedin?: string
  studies: Study[]
  experiences: Experience[]
  sections: Section[]
}

export type Lang = "fr" | "en"

export interface IntlValue<T> {
  fr: T
  en: T
}

export interface Section {
  title: IntlValue<string>
  items: Item[]
}

export interface Item {
  title: IntlValue<string>
  description?: IntlValue<string>
}

export interface Experience {
  startDate: string
  endDate?: string
  current?: boolean
  title: IntlValue<string>
  company: IntlValue<string>
  place: string
  description?: IntlValue<string>
}

export interface Study {
  startDate: string
  endDate?: string
  current?: boolean
  studyTitle: IntlValue<string>
  studyName: IntlValue<string>
  place: string
  description?: IntlValue<string>
}

export interface CvData {
  title: IntlValue<string>
  person: Person
}

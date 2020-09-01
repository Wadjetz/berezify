import { CvData } from "../cv/models"
import { experiences } from "./Experiences"
import { studies } from "./Studies"
import { programmingLanguages } from "./ProgrammingLanguages"
import { languages } from "./Languages"
import { librairies } from "./Librairies"

export const cvData: CvData = {
  title: {
    fr: "Freelance Full Stack Developer",
    en: "Freelance Full Stack Developer"
  },
  person: {
    firstName: "Egor",
    lastName: "Berezovskiy",
    email: "berezify@tuta.io",
    twitter: "@wadjetz",
    linkedin: "egor-berezovskiy",
    github: "wadjetz"
  },
  experiences: experiences,
  studies: studies,
  skills: {
    programmingLanguages: programmingLanguages,
    languages: languages,
    librairies: librairies,
    databases: [
      {
        title: {
          fr: "PostgreSQL",
          en: "PostgreSQL"
        },
        level: 5
      },
      {
        title: {
          fr: "MongoDB",
          en: "MongoDB"
        },
        level: 5
      }
    ],
    others: [
      {
        title: {
          fr: "Network",
          en: "Network"
        },
        description: {
          fr: "CCNA 1",
          en: "CCNA 1"
        }
      },
      {
        title: {
          fr: "Programmation fonctionnelle",
          en: "Functional programming"
        }
      },
      {
        title: {
          fr: "Agilité",
          en: "Agility"
        },
        description: {
          fr: "Scrum et Kanban",
          en: "Scrum and Kanban"
        }
      }
    ]
  }
}

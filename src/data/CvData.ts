import { CvData } from "../cv/models"
import { experiences } from "./Experiences"
import { studies } from "./Studies"
import { programmingLanguages } from "./ProgrammingLanguages"
import { languages } from "./Languages"
import { libraries } from "./Libraries"

export const cvData: CvData = {
  title: {
    fr: "Développeur Full Stack en Freelance",
    en: "Freelance Full Stack Developer"
  },
  person: {
    firstName: "Egor",
    lastName: "Berezovskiy",
    email: "ebe@berezify.fr",
    twitter: "@wadjetz",
    linkedin: "egor-berezovskiy",
    github: "wadjetz",
    website: "berezify.fr",
    description: {
      fr: `Un développeur passionné qui aime faire de la veille, explorer des nouvelles technologies et créer des projets intéressants`,
      en: `A passionate developer who likes explore new technologies and create interesting projects`
    }
  },
  experiences: experiences,
  studies: studies,
  skills: {
    programmingLanguages: programmingLanguages,
    languages: languages,
    libraries: libraries,
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
          fr: "AWS",
          en: "AWS"
        }
      },
      {
        title: {
          fr: "Réseau",
          en: "Network"
        },
        description: {
          fr: "CCNA 1",
          en: "CCNA 1"
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
      },
      {
        title: {
          fr: "CircleCI",
          en: "CircleCI"
        }
      },
      {
        title: {
          fr: "GitHub Actions",
          en: "GitHub Actions"
        }
      },
      {
        title: {
          fr: "Programmation fonctionnelle",
          en: "Functional programming"
        }
      }
    ]
  }
}

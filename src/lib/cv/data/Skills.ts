import type { Skills } from "../models/models"
import { languages } from "./Languages"
import { libraries } from "./Libraries"
import { programmingLanguages } from "./ProgrammingLanguages"

export const skills: Skills = {
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
        fr: "AWS Codebuild",
        en: "AWS Codebuild"
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

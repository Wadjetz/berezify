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
      technology: "postgreSql"
    },
    {
      technology: "redis"
    },
    {
      technology: "meilisearch"
    },
    {
      technology: "mongoDB"
    }
  ],
  others: [
    {
      technology: "fonctionalProgramming"
    },
    {
      technology: "docker"
    },
    {
      technology: "circleCI"
    },
    {
      technology: "githubActions"
    },
    {
      technology: "firebase"
    },
    {
      technology: "network"
    },
    {
      title: {
        fr: "CCNA 1",
        en: "CCNA 1"
      }
    },
    {
      technology: "agility"
    },
    {
      technology: "scrum"
    }
  ]
}

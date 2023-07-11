import type { Study } from "../models/models"

export const studies: Study[] = [
  {
    startDate: "2013",
    endDate: "2016",
    studyTitle: {
      fr: "Master en architecture logicielle",
      en: "Master's degree in Software Architecture"
    },
    studyName: {
      fr: "ESGI",
      en: "ESGI"
    },
    description: {
      fr: `Conceptes avancé de la programmation, gestion des projets, architecture, réseau, Linux, Mobile, Web et les bases des données`,
      en: `Advanced programming, project management, architecture, network, Linux, Mobile, Web and data base concepts`
    },
    place: "Paris, France"
  },
  {
    startDate: "2011",
    endDate: "2013",
    studyTitle: {
      fr: "BTS IRIS",
      en: "BTS IRIS"
    },
    studyName: {
      fr: "Lycée Agora",
      en: "Lycée Agora"
    },
    place: "Puteaux",
    description: {
      fr: `Les bases de la programmation, réseau, Linux et les bases des données`,
      en: `The basics of programming, networking, Linux and data bases`
    }
  }
]

import { Study } from "src/cv/models"

export const studies: Study[] = [
  {
    startDate: "2013",
    endDate: "2016",
    studyTitle: {
      fr: "Master's degree in Computer Science, Software Architect",
      en: "Master's degree in Computer Science, Software Architect"
    },
    studyName: {
      fr: "ESGI - Ecole supérieure de génie informatique - Réseau GES",
      en: "ESGI - Ecole supérieure de génie informatique - Réseau GES"
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
      fr: `Les bases de la programmation en C/C++, Java, PHP, Javascript, HTML, CSS, les basses des données MySql, Reseaux et Linux`,
      en: `Programming fondamantals`
    }
  }
]

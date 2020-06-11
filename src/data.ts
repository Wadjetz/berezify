import { CvData } from "./cv/models"

export const cvData: CvData = {
  title: {
    fr: "Freelance Full Stack Developer",
    en: "Freelance Full Stack Developer"
  },
  person: {
    firstName: "Egor",
    lastName: "Berezovskiy",
    email: "berezify@tuta.io",
    sections: []
  },
  experiences: [
    {
      title: {
        fr: "Développeur Scala",
        en: "Scala Developer"
      },
      description: {
        fr:
          "Developpement d'une application en Scala de visualisation des metadatas des bases des données destiné aux data scientistes",
        en:
          "Developpement d'une application en Scala de visualisation des metadatas des bases des données destiné aux data scientistes"
      },
      freelance: true,
      company: "Zeenea",
      place: "Paris (Remote)",
      startDate: new Date(2020, 3, 14),
      endDate: new Date(2020, 5, 30),
      technologies: ["Scala", "Typescript"]
    }
  ],
  studies: [
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
      place: "Puteaux"
    }
  ]
}

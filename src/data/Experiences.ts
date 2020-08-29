import { Experience } from "src/cv/models"
import { scala, typescript, kafka, postgreSql, react, swift, kotlin, android, iOS, reactNative, playFramework, redux } from "./Technologies"

export const experiences: Experience[] = [
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
    startDate: new Date(2020, 3, 1),
    endDate: new Date(2020, 5, 1),
    technologies: [scala, typescript]
  },
  {
    title: {
      fr: "Full Stack Developer",
      en: "Full Stack Developer"
    },
    description: {
      fr: "Development of the bank as a service system with microservices and event streaming",
      en: "Development of the bank as a service system with microservices and event streaming"
    },
    freelance: true,
    company: "Ditto Service",
    place: "Neuilly-sur-Seine",
    startDate: new Date(2020, 0, 1),
    endDate: new Date(2020, 2, 1),
    technologies: [scala, typescript, kafka, postgreSql, react]
  },
  {
    title: {
      fr: "Full-stack Developer",
      en: "Full-stack Developer"
    },
    description: {
      fr: "Full stack developer with Scala and React. Developer of the native mobile SDK with kotlin and swift",
      en: "Full stack developer with Scala and React. Developer of the native mobile SDK with kotlin and swift"
    },
    freelance: false,
    company: "ReachFive",
    place: "Paris, France",
    startDate: new Date(2018, 10, 1),
    endDate: new Date(2019, 11, 1),
    technologies: [scala, typescript, react, swift, kotlin, android, iOS]
  },
  {
    title: {
      fr: "Software Architect",
      en: "Software Architect"
    },
    description: {
      fr: `Web developer with Scala, Play Framework, Typescript, React, Redux, React-native.
      - Nestincloud : the cloud platform that lets you build, deploy, run & operate your apps easily.
      - Nomad Mobile : react-native mobile application- MonEspaceUp: react-native mobile application`,
      en: `Web developer with Scala, Play Framework, Typescript, React, Redux, React-native.
      - Nestincloud : the cloud platform that lets you build, deploy, run & operate your apps easily.
      - Nomad Mobile : react-native mobile application- MonEspaceUp: react-native mobile application`
    },
    freelance: false,
    company: "Zengularity (Fabernovel)",
    place: "Paris, France",
    startDate: new Date(2014, 9, 1),
    endDate: new Date(2018, 10, 1),
    technologies: [scala, typescript, react, reactNative, playFramework, redux, iOS]
  }
]

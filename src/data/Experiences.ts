import { Experience } from "src/cv/models"
import {
  scala,
  typescript,
  kafka,
  postgreSql,
  react,
  swift,
  kotlin,
  android,
  iOS,
  reactNative,
  playFramework,
  redux
} from "./Technologies"

export const experiences: Experience[] = [
  {
    title: {
      fr: "Développeur Scala",
      en: "Scala Developer"
    },
    description: {
      fr:
        `
Une application de visualisation des métadonnées des bases des données pour les data scientistes
- Création des nouvelles API plus génériques pour l'utilisation par plusieurs applications différentes
- Développement des nouvelles fonctionnalités côté front
        `,
      en: `
A database metadata visualization application for data scientists
- Creation of new, more generic APIs for use by several different applications
- Development of new front-end features
        `
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
      fr: `
Développement from scratch d'une plateforme et des API bancaire nouvelles générations

- Une architecture microservice basé sur l'event-streaming permettant un découplage et modularité importante
- Développement de la partie catalogue de la plateforme. Création des nouvelles API et microservices
      `,
      en: `
Development from scratch of a new generation banking platform and APIs

- A microservice architecture based on event-streaming allowing significant decoupling and modularity
- Development of the catalog part of the platform. Creation of new APIs and microservices
      `
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
      fr: `
Reachfive est une startup de gestion d'utilisateurs et d'authentification

- Web developer with Scala, Play Framework, Typescript, React, Redux, React-native.
- Nestincloud : the cloud platform that lets you build, deploy, run & operate your apps easily.
- Nomad Mobile : react-native mobile application- MonEspaceUp: react-native mobile application`,
      en: `
Reachfive is a user management and authentication startup

- Web developer with Scala, Play Framework, Typescript, React, Redux, React-native.
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

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
  redux,
  circleCI
} from "./Technologies"

const zeenea: Experience = {
  company: "Zeenea",
  place: "Paris (Remote)",
  startDate: new Date(2020, 3, 1),
  endDate: new Date(2020, 5, 1),
  freelance: true,
  title: {
    fr: "Développeur Scala",
    en: "Scala Developer"
  },
  description: {
    fr: `
Une application de visualisation des métadonnées des bases des données pour les data scientistes.
Création des nouvelles API plus génériques pour l'utilisation par plusieurs applications différentes
      `,
    en: `
A database metadata visualization application for data scientists.
Creation of new, more generic APIs for use by several different applications
      `
  },
  technologies: [scala, typescript]
}

const ditto: Experience = {
  company: "Ditto Service",
  place: "Neuilly-sur-Seine",
  startDate: new Date(2020, 0, 1),
  endDate: new Date(2020, 2, 1),
  freelance: true,
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
  technologies: [scala, typescript, kafka, postgreSql, react]
}

const reachFive: Experience = {
  company: "ReachFive",
  place: "Paris, France",
  startDate: new Date(2018, 10, 1),
  endDate: new Date(2019, 11, 1),
  freelance: false,
  title: {
    fr: "Full-stack Developer",
    en: "Full-stack Developer"
  },
  description: {
    fr: `
Reachfive est une startup de gestion d'utilisateurs et d'authentification

- Implémentation du PKCE, une extension de la norme OAuth qui permet de sécuriser les applications mobiles
- Développement du SDK mobile en native pour Android et iOS en Kotlin et Swift
- Mise en place de l'intégration continue avec CircleCI
- Refactiring du code, clean code et conception des nouvelles fonctionnalités
- Développement des nouvelles fonctionnalités côté back et front
`,
    en: "Full stack developer with Scala and React. Developer of the native mobile SDK with kotlin and swift"
  },
  technologies: [scala, typescript, react, swift, kotlin, android, iOS, circleCI]
}

const zengularity: Experience = {
  company: "Zengularity (Fabernovel)",
  place: "Paris, France",
  startDate: new Date(2014, 9, 1),
  endDate: new Date(2018, 10, 1),
  freelance: false,
  title: {
    fr: "Software Architect",
    en: "Software Architect"
  },
  description: {
    fr: `
Zengularity est une entreprise de services spécialisé dans la transformation numérique,
qui n'hésite pas à utiliser les nouvelles technologies et qui avait créé Play Framework.

- NestinCloud: est une plateforme de cloud qui permet de déployer et gérer facilement des applications.
  La plateforme utilise des conteneurs, supporte des bases des données et l'auto scaling

- Nomad Mobile: Développement d'une application mobile en React Native qui permet d'effectuer des missions de dépannage routier en liaison avec des assureurs.
  le dépanneur dispose de toutes les informations nécessaire pour effectuer pour le dépannage.
  La géolocalisation et la détection automatique des étapes de la mission permettent une utilisation minimale de l'application au volant.
  Le support du mode hors-ligne et une perte fréquente de la connexion

- GroupeUP: Développement d'une application mobile en React Native qui permet de gérer ses cartes de ticket restaurant.
  La visualisation des montants et des transactions avec des animations pour une meilleure expérience utilisateur
    `,
    en: `
Web developer with Scala, Play Framework, Typescript, React, Redux, React-native.

- Web developer with Scala, Play Framework, Typescript, React, Redux, React-native.
- Nestincloud : the cloud platform that lets you build, deploy, run & operate your apps easily.
- Nomad Mobile : react-native mobile application- MonEspaceUp: react-native mobile application`
  },
  technologies: [scala, playFramework, typescript, react, reactNative, redux]
}

export const experiences: Experience[] = [zeenea, ditto, reachFive, zengularity]

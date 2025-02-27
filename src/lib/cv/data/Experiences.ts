import type { Experience } from "../models/models"

const sncf: Experience = {
  company: "SNCF Réseau",
  place: "Saint-Denis",
  startDate: new Date(2023, 9, 21),
  freelance: true,
  title: {
    fr: "Développeur Rust",
    en: "Rust developer"
  },
  description: {
    fr: `Contribution au développement d’une application web open source dédiée à la conception et à la gestion des infrastructures ferroviaires. Ce projet inclut la planification des horaires, l’analyse de capacité, la gestion de conflits, et la simulation de signalisation ferroviaire. OSRD vise l’interopérabilité des formats d’infrastructure et des systèmes de signalisation, avec une gouvernance ouverte et collaborative.`,
    en: `Contributing to the development of an open-source web application for railway infrastructure design, timetable management, capacity analysis, and signaling simulation. OSRD focuses on interoperability between infrastructure formats and signaling systems, following an open and collaborative governance model.`
  },
  link: "https://osrd.fr",
  linkLabel: "osrd.fr",
  current: true,
  technologies: ["rust", "actix", "axum", "postgreSql", "docker", "react", "css", "html", "githubActions"]
}

const louve: Experience = {
  company: "Louve Invest",
  place: "Paris (Remote)",
  startDate: new Date(2022, 0, 1),
  endDate: new Date(2023, 6, 31),
  freelance: true,
  title: {
    fr: "Développeur Full Stack",
    en: "Full Stack developer"
  },
  description: {
    fr: `
Développement du produit Louve Invest

 - Les lambda functions de firebase
 - CI/CD avec Github Actions
 - Conceptions des nouvelles fonctionnalités
 - Création d'un UI-Kit de composants réutilisables
 - Development de l'application mobile en React Native
 - Mise en place de monorepo avec yarn workspaces
      `,
    en: `
Development of Louve Invest product

- Firebase lambda functions
- CI/CD with Github Actions
- New feature designs
- Creation of a UI-Kit of reusable components
- Setting up monorepo with yarn workspaces
      `
  },
  technologies: ["typescript", "react", "reactNative", "css", "html", "firebase", "githubActions"]
}

const treezor: Experience = {
  company: "Treezor",
  place: "Paris (Remote)",
  startDate: new Date(2021, 3, 1),
  endDate: new Date(2021, 11, 20),
  freelance: true,
  title: {
    fr: "Développeur React-Native",
    en: "React-Native Developer"
  },
  description: {
    fr: `
Treezor est une neo banque as a service qui fournit des API bancaires et des composants pour les applications mobiles.

- Création d'un UI-Kit et de composants réutilisables
- Mise en place de monorepo avec yarn workspaces
- Development de l'application mobile de démonstration en utilisants l'UI-Kit
      `,
    en: `
Treezor is a neo bank as a service that provides banking APIs and components for mobile applications.

- Creation of a UI-Kit of reusable components
- Setting up monorepo with yarn workspaces
- Development of the demonstration mobile application using the UI-Kit
      `
  },
  technologies: ["typescript", "reactNative", "iOS", "android"]
}

const squirel: Experience = {
  company: "Squirel",
  place: "Paris (Remote)",
  startDate: new Date(2020, 8, 1),
  endDate: new Date(2021, 2, 1),
  freelance: true,
  title: {
    fr: "Développeur React-Native",
    en: "React-Native Developer"
  },
  description: {
    fr: `
Développement des nouvelles fonctionnalités de l'application mobile et du site web www.ouigo.com
      `,
    en: `
Development of new features for the mobile application and the website www.ouigo.com 
      `
  },
  technologies: ["typescript", "react", "reactNative", "redux", "css", "html", "iOS", "android", "scrum"]
}

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
  technologies: ["scala", "typescript", "scrum"]
}

const ditto: Experience = {
  company: "Ditto Service",
  place: "Neuilly-sur-Seine",
  startDate: new Date(2020, 0, 1),
  endDate: new Date(2020, 2, 1),
  freelance: true,
  title: {
    fr: "Développeur full-stack",
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
  technologies: [
    "scala",
    "typescript",
    "kafka",
    "postgreSql",
    "react",
    "redux",
    "css",
    "html",
    "scrum",
    "fonctionalProgramming"
  ]
}

const reachFive: Experience = {
  company: "ReachFive",
  place: "Paris, France",
  startDate: new Date(2018, 10, 1),
  endDate: new Date(2019, 11, 1),
  freelance: false,
  title: {
    fr: "Développeur full-stack",
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
    en: `
Reachfive is a user management and authentication startup
- Implementation of the PKCE, an extension of the OAuth standard which allows to secure mobile applications
- Development of the native mobile SDK for Android and iOS in Kotlin and Swift
- Implementation of continuous integration with CircleCI
- Code refactiring, clean code and design of new features
- Development of new features on the back-end and front-end
    `
  },
  technologies: [
    "typescript",
    "react",
    "reactNative",
    "swift",
    "kotlin",
    "android",
    "iOS",
    "circleCI",
    "css",
    "html",
    "fonctionalProgramming",
    "scala",
    "playFramework"
  ]
}

const zengularity: Experience = {
  company: "Zengularity (Fabernovel)",
  place: "Paris, France",
  startDate: new Date(2014, 9, 1),
  endDate: new Date(2018, 10, 1),
  freelance: false,
  title: {
    fr: "Architecte logiciel",
    en: "Software Architect"
  },
  description: {
    fr: `
Zengularity est une entreprise de services spécialisé dans la transformation numérique,
qui n'hésite pas à utiliser les nouvelles technologies et qui avait créé Play Framework.

- NestinCloud: est une plateforme de cloud qui permet de déployer et gérer facilement des applications.
  La plateforme utilise des conteneurs, supporte des bases des données et l'auto scaling

- Nomad Mobile: Développement d'une application mobile en React Native qui permet d'effectuer des missions de dépannage routier en liaison avec des assureurs.
  le dépanneur dispose de toutes les informations nécessaires pour effectuer pour le dépannage.
  La géolocalisation et la détection automatique des étapes de la mission permettent une utilisation minimale de l'application au volant.
  Le support du mode hors-ligne et une perte fréquente de la connexion

- GroupeUP: Développement d'une application mobile en React Native qui permet de gérer ses cartes de ticket restaurant.
  La visualisation des montants et des transactions avec des animations pour une meilleure expérience utilisateur
    `,
    en: `
Zengularity is a service company specializing in digital transformation,
who does not hesitate to use new technologies and who created Play Framework.

- NestinCloud: is a cloud platform that allows you to easily deploy and manage applications.
  The platform uses containers, supports databases and auto scaling

- Nomad Mobile: Development of a mobile application in React Native which makes it possible to carry out roadside assistance missions in conjunction with insurers.
  the troubleshooter has all the information needed to perform troubleshooting.
  Geolocation and automatic detection of mission steps allow minimal use of the application while driving.
  Support for offline mode and frequent loss of connection

- GroupeUP: Development of a mobile application in React Native which allows you to manage your restaurant ticket cards.
  Visualization of amounts and transactions with animations for a better user experience

    `
  },
  technologies: [
    "typescript",
    "redux",
    "react",
    "reactNative",
    "node",
    "circleCI",
    "css",
    "html",
    "fonctionalProgramming",
    "scala",
    "playFramework",
    "mongoDB",
    "postgreSql",
    "docker",
    "linux",
    "agility",
    "scrum"
  ]
}

export const experiences: Experience[] = [sncf, louve, treezor, squirel, zeenea, ditto, reachFive, zengularity]

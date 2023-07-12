import type { Translation } from "../i18n-types"

const fr = {
  portfolio: {
    name: "Egor Berezovskiy",
    nav: {
      cv: "CV",
      home: "Accueil"
    },
    home: {
      hello: "Bonjour,",
      iam: "Je suis un developpeur full stack",
      description:
        "passionné et curieux, constamment à l'affût des dernières tendances technologiques. J'aime consacrer du temps à la veille technologique, explorant de nouvelles technologies et découvrant des solutions innovantes pour résoudre des problèmes complexes"
    },
    skills: {
      programmingLanguages: "Mes langages de programmation préférés",
      frameworks: "Mes frameworks préférés",
      databases: "Mes bases de données préférées"
    }
  },
  cv: {
    title: "CV - Développeur full stack"
  },
  contact: {
    title: "Me contacter"
  },
  skills: {
    title: "Competences",
    programmingLanguages: "Langages de programmation",
    libraries: "Librairies et frameworks",
    databases: "Bases de données",
    others: "Autres",
    languages: "Langues"
  },
  projects: {
    title: "Projets personnels"
  },
  stydies: {
    title: "Etudes"
  },
  experiences: {
    title: "Expériences professionnelles"
  },
  freelance: "Freelance",
  technologies: {
    typescript: "TypeScript",
    javascript: "JavaScript",
    scala: "Scala",
    kafka: "Kafka",
    react: "React",
    reactNative: "React Native",
    redux: "Redux",
    playFramework: "Play Framework",
    swift: "Swift",
    kotlin: "Kotlin",
    postgreSql: "PostgreSQL",
    android: "Android",
    iOS: "iOS",
    circleCI: "CircleCI",
    firebase: "Firebase",
    githubActions: "Github Actions",
    svelte: "Svelte.js",
    sveltekit: "SvelteKit",
    rust: "Rust",
    node: "Node.js",
    aws: "AWS",
    "akka-akkaStream": "Akka / Akka Stream",
    mongoDB: "MongoDB",
    network: "Network",
    html: "HTML",
    css: "CSS",
    fonctionalProgramming: "Programmation fonctionnelle",
    scrum: "Scrum",
    agility: "Agilité",
    meilisearch: "Meilisearch",
    d3: "D3.js",
    actix: "Actix",
    docker: "Docker",
    shell: "Shell",
    linux: "Linux",
    oauth2: "OAuth2",
    redis: "Redis"
  }
} satisfies Translation

export default fr

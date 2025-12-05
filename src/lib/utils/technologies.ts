import { z } from "zod"

import { getLocale } from "$lib/paraglide/runtime"

export const TechnologiesKeys = [
  "typescript",
  "javascript",
  "scala",
  "kafka",
  "react",
  "reactNative",
  "redux",
  "playFramework",
  "swift",
  "kotlin",
  "postgreSql",
  "android",
  "iOS",
  "circleCI",
  "firebase",
  "githubActions",
  "svelte",
  "sveltekit",
  "rust",
  "node",
  "aws",
  "akka-akkaStream",
  "mongoDB",
  "network",
  "html",
  "css",
  "fonctionalProgramming",
  "scrum",
  "agility",
  "meilisearch",
  "d3",
  "actix",
  "axum",
  "docker",
  "shell",
  "linux",
  "oauth2",
  "redis"
] as const

export const TechnologiesKeysValidator = z.enum(TechnologiesKeys)
export type Technology = z.infer<typeof TechnologiesKeysValidator>

export const TechnologiesTranslations: {
  [key: string]: { [key in Technology]: string }
} = {
  fr: {
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
    axum: "Axum",
    docker: "Docker",
    shell: "Shell",
    linux: "Linux",
    oauth2: "OAuth2",
    redis: "Redis"
  },
  en: {
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
    fonctionalProgramming: "Fonctional programming",
    scrum: "Scrum",
    agility: "Agility",
    meilisearch: "Meilisearch",
    d3: "D3.js",
    actix: "Actix",
    axum: "Axum",
    docker: "Docker",
    shell: "Shell",
    linux: "Linux",
    oauth2: "OAuth2",
    redis: "Redis"
  }
}

export function technologies(key: Technology): Technology | string {
  const locale = getLocale()
  const translations = TechnologiesTranslations[locale]
  const translation = translations[key]
  if (!translation) {
    return key
  } else {
    return translation
  }
}

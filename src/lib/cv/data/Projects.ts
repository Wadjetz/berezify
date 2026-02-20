import type { Project } from "../models/models"

export const projects: Project[] = [
  {
    title: "Brocolix",
    description: {
      fr: `
Une application de recettes de cuisine
- Création de recettes
- Planification de repas
`,
      en: `
A cooking recipes application
- Recipes creation
- Meals planning
`
    },
    link: "https://brocolix.fr",
    linkLabel: "brocolix.fr",
    technologies: [
      "typescript",
      "svelte",
      "sveltekit",
      "rust",
      "postgreSql",
      "githubActions",
      "actix",
      "meilisearch",
      "docker",
      "css",
      "html",
      "redis"
    ]
  }
]

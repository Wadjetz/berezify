import type { Project } from "../models/models"
import { githubActions, postgreSql, rust, svelte, sveltekit, typescript } from "./Technologies"

export const projects: Project[] = [
  {
    title: "Brocolix",
    description: {
      fr: `
Une application de recettes de cuisine
- Creation de recettes
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
    technologies: [typescript, svelte, sveltekit, rust, postgreSql, githubActions]
  },
  {
    title: "Mindstream",
    description: {
      fr: `
- Une application de flux RSS
- Gestionnaire de favoris des sites web
- Gestionnaire de projets
- Stackage de fichiers
        `,
      en: `
- A RSS feed application
- Web sites bookmarks manager
- Projects manager
- Files stackage
      `
    },
    link: "https://mindstream.berezify.fr",
    linkLabel: "mindstream.berezify.fr",
    technologies: [typescript, svelte, sveltekit, rust, postgreSql, githubActions]
  }
]

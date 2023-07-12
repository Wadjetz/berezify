import type { CvData } from "../models/models"
import { experiences } from "./Experiences"
import { projects } from "./Projects"
import { skills } from "./Skills"
import { studies } from "./Studies"

export const cvData: CvData = {
  title: {
    fr: "Développeur Full Stack",
    en: "Full Stack Developer"
  },
  person: {
    firstName: "Egor",
    lastName: "Berezovskiy",
    email: "ebe@berezify.fr",
    twitter: "@wadjetz",
    linkedin: "egor-berezovskiy",
    github: "wadjetz",
    website: "berezify.fr",
    description: {
      fr: `Je suis un développeur passionné et curieux, constamment à l'affût des dernières tendances technologiques. J'aime consacrer du temps à la veille technologique, explorant de nouvelles technologies et découvrant des solutions innovantes pour résoudre des problèmes complexes`,
      en: `I'am a passionate and curious developer, constantly on the lookout for the latest technological trends. I like to spend time on technological watch, exploring new technologies and discovering innovative solutions to solve complex problems`
    }
  },
  experiences,
  studies,
  skills,
  projects
}

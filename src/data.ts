import { CvData, Technology } from "./cv/models"

export const scala: Technology = {
  name: "Scala",
  icon: "DiScala"
}
export const typescript: Technology = {
  name: "Typescript",
  icon: "DiJavascript"
}
export const kafka: Technology = {
  name: "Kafka",
  icon: "DiScala"
}
export const react: Technology = {
  name: "React",
  icon: "DiReact"
}
export const reactNative: Technology = {
  name: "React Native",
  icon: "DiReact"
}
export const redux: Technology = {
  name: "Redux",
  icon: "DiReact"
}
export const playFramework: Technology = {
  name: "Play Framework",
  icon: "DiScala"
}
export const swift: Technology = {
  name: "Swift",
  icon: "DiSwift"
}
export const kotlin: Technology = {
  name: "Kotlin",
  icon: "DiAndroid"
}
export const postgreSql: Technology = {
  name: "PostgreSQL",
  icon: "DiPostgresql"
}
export const android: Technology = {
  name: "Android",
  icon: "DiAndroid"
}
export const iOS: Technology = {
  name: "iOS",
  icon: "DiApple"
}


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
      startDate: new Date(2020, 3, 1),
      endDate: new Date(2020, 5, 1),
      technologies: [scala, typescript]
    },
    {
      title: {
        fr: "Full Stack Developer",
        en: "Full Stack Developer",
      },
      description: {
        fr: "Development of the bank as a service system with microservices and event streaming",
        en: "Development of the bank as a service system with microservices and event streaming",
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
        en: "Full-stack Developer",
      },
      description: {
        fr: "Full stack developer with Scala and React. Developer of the native mobile SDK with kotlin and swift",
        en: "Full stack developer with Scala and React. Developer of the native mobile SDK with kotlin and swift",
      },
      freelance: false,
      company: "ReachFive",
      place: "Paris, France",
      startDate: new Date(2018, 10, 1),
      endDate: new Date(2019, 11, 1),
      technologies: [scala, typescript, react, swift, kotlin, android, iOS],
    },
    {
      title: {
        fr: "Software Architect",
        en: "Software Architect",
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
      technologies: [scala, typescript, react, reactNative, playFramework, redux, iOS],
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
      place: "Puteaux",
      description: {
        fr: `Les bases de la programmation en C/C++, Java, PHP, Javascript, HTML, CSS, les basses des données MySql, Reseaux et Linux`,
        en: `Programming fondamantals`,
      },
    }
  ]
}

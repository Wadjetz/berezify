<script lang="ts">
  import type { Technology } from "$lib/cv/models/Technologies"

  import Linux from "virtual:icons/logos/linux-tux"
  import Meilisearch from "virtual:icons/logos/meilisearch"
  import MongoDB from "virtual:icons/logos/mongodb-icon"
  import PostgreSql from "virtual:icons/logos/postgresql"
  import Redis from "virtual:icons/logos/redis"
  import Redux from "virtual:icons/logos/redux"
  import Svelte from "virtual:icons/logos/svelte-icon"
  import Android from "virtual:icons/mdi/android"
  import Kafka from "virtual:icons/mdi/apache-kafka"
  import IOS from "virtual:icons/mdi/apple"
  import Aws from "virtual:icons/mdi/aws"
  import Github from "virtual:icons/mdi/github"
  import Lambda from "virtual:icons/mdi/lambda"
  import Css from "virtual:icons/mdi/language-css3"
  import Html from "virtual:icons/mdi/language-html5"
  import React from "virtual:icons/mdi/react"
  import Network from "virtual:icons/mdi/server-network"
  import Actix from "virtual:icons/skill-icons/actix-dark"
  import CircleCi from "virtual:icons/vscode-icons/file-type-circleci"
  import Docker from "virtual:icons/vscode-icons/file-type-docker"
  import Firebase from "virtual:icons/vscode-icons/file-type-firebase"
  import JavaScript from "virtual:icons/vscode-icons/file-type-js-official"
  import Kotlin from "virtual:icons/vscode-icons/file-type-kotlin"
  import Node from "virtual:icons/vscode-icons/file-type-node"
  import Rust from "virtual:icons/vscode-icons/file-type-rust"
  import Scala from "virtual:icons/vscode-icons/file-type-scala"
  import Swift from "virtual:icons/vscode-icons/file-type-swift"
  import Typescript from "virtual:icons/vscode-icons/file-type-typescript-official"

  export let technology: Technology
  export let size: number = 14
</script>

{#if technology === "actix"}
  <Actix width={size} height={size} />
{:else if technology === "android"}
  <Android width={size} height={size} color="#a4c639" />
{:else if technology === "aws"}
  <Aws width={size} height={size} color="#ff9900" />
{:else if technology === "css"}
  <Css width={size} height={size} color="#264de4" />
{:else if technology === "html"}
  <Html width={size} height={size} color="#e34c26" />
{:else if technology === "react" || technology === "reactNative"}
  <React width={size} height={size} color="#61dafb" />
{:else if technology === "typescript"}
  <Typescript width={size} height={size} />
{:else if technology === "iOS"}
  <IOS width={size} height={size} color="#000000" />
{:else if technology === "scala" || technology === "playFramework"}
  <Scala width={size} height={size} />
{:else if technology === "firebase"}
  <Firebase width={size} height={size} />
{:else if technology === "githubActions"}
  <Github width={size} height={size} />
{:else if technology === "redux"}
  <Redux width={size} height={size} />
{:else if technology === "kafka"}
  <Kafka width={size} height={size} />
{:else if technology === "postgreSql"}
  <PostgreSql width={size} height={size} />
{:else if technology === "fonctionalProgramming"}
  <Lambda width={size} height={size} />
{:else if technology === "swift"}
  <Swift width={size} height={size} />
{:else if technology === "kotlin"}
  <Kotlin width={size} height={size} />
{:else if technology === "circleCI"}
  <CircleCi width={size} height={size} />
{:else if technology === "node"}
  <Node width={size} height={size} />
{:else if technology === "mongoDB"}
  <MongoDB width={size} height={size} />
{:else if technology === "docker"}
  <Docker width={size} height={size} />
{:else if technology === "linux"}
  <Linux width={size} height={size} />
{:else if technology === "rust"}
  <Rust width={size} height={size} />
{:else if technology === "svelte" || technology === "sveltekit"}
  <Svelte width={size} height={size} />
{:else if technology === "redis"}
  <Redis width={size} height={size} />
{:else if technology === "meilisearch"}
  <Meilisearch width={size} height={size} />
{:else if technology === "javascript"}
  <JavaScript width={size} height={size} />
{:else if technology === "network"}
  <Network width={size} height={size} />
{/if}

<style>
</style>

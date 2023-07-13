<script lang="ts">
  import { page } from "$app/stores"
  import Databases from "$lib/components/portfolio/Databases.svelte"
  import Frameworks from "$lib/components/portfolio/Frameworks.svelte"
  import Header from "$lib/components/portfolio/Header.svelte"
  import Home from "$lib/components/portfolio/Home.svelte"
  import ProgrammingLanguages from "$lib/components/portfolio/ProgrammingLanguages.svelte"
  import { cvData } from "$lib/cv/data/CvData"
  import { LL } from "$lib/i18n/i18n-svelte"

  import type { PageData } from "./$types"

  export let data: PageData
</script>

<svelte:head>
  <title>{$LL.portfolio.title()}</title>
  <meta name="description" content={cvData.person.description[data.locale]} />

  <meta property="og:site_name" content="Berezify" />
  <meta property="og:title" content={$LL.cv.title()} />
  <meta property="og:description" content={cvData.person.description[data.locale]} />
  <meta property="og:url" content={$page.url.origin} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={$page.url.hostname} />
  <meta property="twitter:url" content={$page.url.origin} />
  <meta name="twitter:title" content={$LL.cv.title()} />
  <meta name="twitter:description" content={cvData.person.description[data.locale]} />
</svelte:head>

<div class="wrapper">
  <Header />
  <Home />
</div>
<ProgrammingLanguages />
<Frameworks />
<Databases />

<style>
  .wrapper {
    background-color: var(--grey3);
  }
</style>

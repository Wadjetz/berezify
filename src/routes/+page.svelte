<script lang="ts">
  import { page } from "$app/state"
  import Databases from "$lib/components/portfolio/Databases.svelte"
  import Frameworks from "$lib/components/portfolio/Frameworks.svelte"
  import Header from "$lib/components/portfolio/Header.svelte"
  import Home from "$lib/components/portfolio/Home.svelte"
  import ProgrammingLanguages from "$lib/components/portfolio/ProgrammingLanguages.svelte"
  import { cvData } from "$lib/cv/data/CvData"
  import { m } from "$lib/paraglide/messages"
  import { getLocale } from "$lib/paraglide/runtime"

  const locale = $derived(getLocale())
</script>

<svelte:head>
  <title>{m.portfolio_title()}</title>
  <meta name="description" content={cvData.person.description[locale]} />

  <meta property="og:site_name" content="Berezify" />
  <meta property="og:title" content={m.cv_title()} />
  <meta property="og:description" content={cvData.person.description[locale]} />
  <meta property="og:url" content={page.url.origin} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={page.url.hostname} />
  <meta property="twitter:url" content={page.url.origin} />
  <meta name="twitter:title" content={m.cv_title()} />
  <meta name="twitter:description" content={cvData.person.description[locale]} />
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

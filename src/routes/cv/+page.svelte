<script lang="ts">
  import { page } from "$app/state"
  import Aside from "$lib/components/cv/Aside.svelte"
  import ExperiencesList from "$lib/components/cv/ExperiencesList.svelte"
  import Header from "$lib/components/cv/Header.svelte"
  import { cvData } from "$lib/cv/data/CvData"
  import { m } from "$lib/paraglide/messages"
  import { getLocale } from "$lib/paraglide/runtime"

  const locale = getLocale()
</script>

<svelte:head>
  <title>{m.cv_title()}</title>
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

<Header />
<div class="body">
  <Aside />
  <ExperiencesList />
</div>

<style>
  .body {
    display: grid;
    grid-template-columns: auto 300px;
    grid-template-rows: auto;
    grid-template-areas: "article sidebar";
    gap: var(--s6);
    max-width: 1000px;
    margin: auto;
    background-color: #ffffff;
  }

  @media screen and (max-width: 500px) {
    .body {
      padding: var(--s3);
      grid-template-columns: 1fr;
      grid-template-areas: "article" "sidebar";
    }
  }
</style>

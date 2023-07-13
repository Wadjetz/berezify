<script lang="ts">
  import { page } from "$app/stores"
  import Aside from "$lib/components/cv/Aside.svelte"
  import ExperiencesList from "$lib/components/cv/ExperiencesList.svelte"
  import Header from "$lib/components/cv/Header.svelte"
  import { cvData } from "$lib/cv/data/CvData"
  import { LL } from "$lib/i18n/i18n-svelte"

  import type { PageData } from "./$types"

  export let data: PageData
</script>

<svelte:head>
  <title>{$LL.cv.title()}</title>
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

<Header locale={data.locale} />
<div class="body">
  <Aside locale={data.locale} />
  <ExperiencesList locale={data.locale} />
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

<script lang="ts">
  import Aside from "../Aside.svelte"
  import ExperiencesList from "../ExperiencesList.svelte"
  import Header from "../Header.svelte"
  import type { PageData } from "./$types"

  export let data: PageData
</script>

<svelte:head>
  <title>CV</title>
  <meta name="description" content="CV" />
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

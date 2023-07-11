<script lang="ts">
  import { cvData } from "$lib/cv/data/CvData"
  import type { Locales } from "$lib/i18n/i18n-types"

  export let locale: Locales
</script>

<header class="header">
  <div>
    <h1>{cvData.title[locale]}</h1>
    <p class="description">{cvData.person.description[locale]}</p>
  </div>
</header>

<style>
  .header {
    grid-area: header;
    padding: var(--s3);
    background-color: #3d7ad9;
    color: #ffffff;
  }

  .description {
    font-size: 0.9rem;
  }
</style>

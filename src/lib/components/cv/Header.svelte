<script lang="ts">
  import { cvData } from "$lib/cv/data/CvData"
  import { getLocale } from "$lib/paraglide/runtime"

  const locale = $derived(getLocale())
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
    background-color: var(--color1);
    color: #ffffff;
  }

  .description {
    font-size: 0.9rem;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    padding: 0;
    margin-top: 0;
    margin-bottom: var(--s3);
  }
</style>

<script lang="ts">
  import type { Study } from "$lib/cv/models/models"
  import type { Locales } from "$lib/i18n/i18n-types"

  export let locale: Locales
  export let study: Study
</script>

<section>
  <h3>{study.studyTitle[locale]}</h3>
  <h4>{study.studyName[locale]}</h4>
  {#if study.description}
    <p class="description">{study.description[locale]}</p>
  {/if}
</section>

<style>
  section {
    break-inside: avoid;
  }

  .description {
    font-size: 0.8rem;
    margin: 0;
  }
</style>

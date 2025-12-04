<script lang="ts">
  import type { Study } from "$lib/cv/models/models"
  import { getLocale } from "$lib/paraglide/runtime"
  import Markdown from "$lib/uikit/Markdown.svelte"

  const { study }: { study: Study } = $props()

  const locale = $derived(getLocale())
</script>

<section>
  <h3 class="cv-h3">{study.studyTitle[locale]}</h3>
  <h4>{study.studyName[locale]}</h4>
  {#if study.description}
    <div class="markdown">
      <Markdown source={study.description[locale]} />
    </div>
  {/if}
</section>

<style>
  section {
    break-inside: avoid;
  }

  h4 {
    font-size: 0.9rem;
    color: #3d7ad9;
    margin-top: 0;
    margin-bottom: var(--s1);
  }
</style>

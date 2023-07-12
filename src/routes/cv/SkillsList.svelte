<script lang="ts">
  import type { Skill } from "$lib/cv/models/models"
  import { LL } from "$lib/i18n/i18n-svelte"
  import type { Locales } from "$lib/i18n/i18n-types"
  import Tag from "$lib/uikit/Tag.svelte"

  import TechnologyIcon from "./TechnologyIcon.svelte"

  export let locale: Locales
  export let title: string
  export let skills: Skill[]
</script>

<section>
  <h3 class="cv-h3">{title}</h3>
  <ul role="list">
    {#each skills as skill}
      {#if skill.title}
        <li>
          <Tag label={skill.title[locale]} />
        </li>
      {:else if skill.technology}
        <li>
          <Tag label={$LL.technologies[skill.technology]()}>
            <TechnologyIcon technology={skill.technology} />
          </Tag>
        </li>
      {/if}
    {/each}
  </ul>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: var(--s2);
    break-inside: avoid;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--s2);
    flex-wrap: wrap;
  }
</style>

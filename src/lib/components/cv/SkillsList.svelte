<script lang="ts">
  import type { Skill } from "$lib/cv/models/models"
  import { getLocale } from "$lib/paraglide/runtime"
  import Tag from "$lib/uikit/Tag.svelte"
  import TechnologyIcon from "$lib/uikit/TechnologyIcon.svelte"
  import { technologies } from "$lib/utils/technologies"

  interface Props {
    title: string
    skills: Skill[]
  }
  const { title, skills }: Props = $props()

  const locale = $derived(getLocale())
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
          <Tag label={technologies(skill.technology)}>
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

<script lang="ts">
  import type { Project } from "$lib/cv/models/models"
  import type { Locales } from "$lib/i18n/i18n-types"
  import Markdown from "$lib/uikit/Markdown.svelte"
  import Tag from "$lib/uikit/Tag.svelte"

  export let project: Project
  export let locale: Locales
</script>

<div class="project">
  <h3>{project.title}</h3>
  {#if project.description}
    <div class="markdown">
      <Markdown source={project.description[locale]} />
    </div>
  {/if}
  {#if project.link}
    <a href={project.link}>{project.linkLabel}</a>
  {/if}
  <ul class="technologies">
    {#each project.technologies as technology}
      <li>
        <Tag label={technology.name} />
      </li>
    {/each}
  </ul>
</div>

<style>
  .project {
    break-inside: avoid;
    display: flex;
    flex-direction: column;
  }

  .technologies {
    display: flex;
    flex-direction: row;
    gap: var(--s2);
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  :global(.markdown p) {
    font-size: 0.8rem;
    margin-top: 0;
  }

  a {
    font-size: 0.9rem;
    color: #3d7ad9;
    text-decoration: none;
    margin-bottom: var(--s2);
  }
</style>

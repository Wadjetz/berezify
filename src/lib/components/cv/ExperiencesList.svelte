<script lang="ts">
  import { format } from "date-fns"
  import { enUS, fr } from "date-fns/locale"

  import type { Locales } from "$lib/i18n/i18n-types"
  import { cvData } from "$lib/cv/data/CvData"
  import { LL } from "$lib/i18n/i18n-svelte"
  import Markdown from "$lib/uikit/Markdown.svelte"
  import Tag from "$lib/uikit/Tag.svelte"
  import TechnologyIcon from "$lib/uikit/TechnologyIcon.svelte"

  export let locale: Locales
</script>

<article class="article">
  <h2>{$LL.experiences.title()}</h2>

  {#each cvData.experiences as experience}
    <section>
      <div class="title">
        <h3 class="cv-h3">{experience.title[locale]}</h3>
        {#if experience.freelance}
          <div class="freelance">{$LL.freelance()}</div>
        {/if}
      </div>
      <div class="infos">
        <h4>{experience.company}</h4>
        <time>
          {format(experience.startDate, "MMMM yyyy", { locale: locale === "fr" ? fr : enUS })}
          {experience.endDate
            ? " - " + format(experience.endDate, "MMMM yyyy", { locale: locale === "fr" ? fr : enUS })
            : ""}
        </time>
      </div>
      <div class="markdown">
        <Markdown source={experience.description[locale]} />
      </div>
      {#if experience.link}
        <div class="link">
          <a target="_blank" href={experience.link}>{experience.linkLabel ?? experience.link}</a>
        </div>
      {/if}
      <ul class="technologies">
        {#each experience.technologies as technology}
          <li>
            <Tag label={$LL.technologies[technology]()}>
              <TechnologyIcon {technology} />
            </Tag>
          </li>
        {/each}
      </ul>
    </section>
  {/each}
</article>

<style>
  .article {
    grid-area: article;
    display: flex;
    flex-direction: column;
    gap: var(--s4);
  }
  section {
    break-inside: avoid;
  }

  :global(.markdown p) {
    font-size: 0.8rem;
    margin-top: 0;
    margin-bottom: var(--s2);
  }
  :global(.markdown ul) {
    margin-top: 0;
    padding-left: var(--s4);
  }
  :global(.markdown li) {
    font-size: 0.8rem;
  }

  time {
    font-size: 0.8rem;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--s2);
    flex-wrap: wrap;
  }

  .freelance {
    font-size: 0.7rem;
    color: var(--grey1);
  }

  .infos {
    display: flex;
    flex-direction: row;
    gap: var(--s3);
    align-items: center;
    justify-content: space-between;
  }

  .technologies {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--s2);
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0;
    padding-bottom: var(--s1);
    color: var(--color1);
    border-bottom-color: var(--color1);
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  h4 {
    font-size: 0.9rem;
    color: #3d7ad9;
    margin-top: 0;
    margin-bottom: var(--s1);
  }

  .link a {
    font-size: 0.9rem;
    color: var(--color1);
    text-decoration: none;
    margin-bottom: var(--s2);
  }

  .link {
    margin-bottom: var(--s2);
  }
</style>

<script lang="ts">
  import Contact from "$lib/components/cv/Contact.svelte"
  import Project from "$lib/components/cv/Project.svelte"
  import SkillsList from "$lib/components/cv/SkillsList.svelte"
  import Study from "$lib/components/cv/Study.svelte"
  import { cvData } from "$lib/cv/data/CvData"
  import { LL } from "$lib/i18n/i18n-svelte"
  import type { Locales } from "$lib/i18n/i18n-types"

  export let locale: Locales
</script>

<aside>
  <h2>{$LL.contact.title()}</h2>
  <Contact />
  <h2>{$LL.skills.title()}</h2>
  <SkillsList {locale} title={$LL.skills.programmingLanguages()} skills={cvData.skills.programmingLanguages} />
  <SkillsList {locale} title={$LL.skills.libraries()} skills={cvData.skills.libraries} />
  <SkillsList {locale} title={$LL.skills.databases()} skills={cvData.skills.databases} />
  <SkillsList {locale} title={$LL.skills.others()} skills={cvData.skills.others} />
  <SkillsList {locale} title={$LL.skills.languages()} skills={cvData.skills.languages} />
  <div class="studies-section">
    <h2>{$LL.stydies.title()}</h2>
    <section class="studies">
      {#each cvData.studies as study}
        <Study {study} {locale} />
      {/each}
    </section>
  </div>
  <div class="projects-section">
    <h2>{$LL.projects.title()}</h2>
    <section class="projects">
      {#each cvData.projects as project}
        <Project {project} {locale} />
      {/each}
    </section>
  </div>
</aside>

<style>
  aside {
    max-width: 350px;
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    gap: var(--s4);
  }

  .studies-section,
  .projects-section {
    display: flex;
    flex-direction: column;
    gap: var(--s4);
    break-inside: avoid;
  }

  .studies,
  .projects {
    display: flex;
    flex-direction: column;
    gap: var(--s3);
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
</style>

<script lang="ts">
  import { cvData } from "$lib/cv/data/CvData"
  import { LL } from "$lib/i18n/i18n-svelte"
  import type { Locales } from "$lib/i18n/i18n-types"

  import Contact from "./Contact.svelte"
  import Project from "./Project.svelte"
  import SkillsList from "./SkillsList.svelte"
  import Study from "./Study.svelte"

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
</style>

<script lang="ts">
  import Contact from "$lib/components/cv/Contact.svelte"
  import Project from "$lib/components/cv/Project.svelte"
  import SkillsList from "$lib/components/cv/SkillsList.svelte"
  import Study from "$lib/components/cv/Study.svelte"
  import { cvData } from "$lib/cv/data/CvData"
  import { m } from "$lib/paraglide/messages"
</script>

<aside>
  <h2>{m.contact_title()}</h2>
  <Contact />
  <h2>{m.skills_title()}</h2>
  <SkillsList title={m.skills_programmingLanguages()} skills={cvData.skills.programmingLanguages} />
  <SkillsList title={m.skills_libraries()} skills={cvData.skills.libraries} />
  <SkillsList title={m.skills_databases()} skills={cvData.skills.databases} />
  <SkillsList title={m.skills_others()} skills={cvData.skills.others} />
  <SkillsList title={m.skills_languages()} skills={cvData.skills.languages} />
  <div class="studies-section">
    <h2>{m.stydies_title()}</h2>
    <section class="studies">
      {#each cvData.studies as study}
        <Study {study} />
      {/each}
    </section>
  </div>
  <div class="projects-section">
    <h2>{m.projects_title()}</h2>
    <section class="projects">
      {#each cvData.projects as project}
        <Project {project} />
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

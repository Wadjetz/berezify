<script lang="ts">
  import { m } from "$lib/paraglide/messages"
  import TechnologyIcon from "$lib/uikit/TechnologyIcon.svelte"
  import { type Technology, technologies } from "$lib/utils/technologies"

  const frameworks: Technology[] = ["sveltekit", "reactNative", "node"]

  const iconSize = 200
</script>

<section class="skills">
  <div class="content">
    <h2 class="title">{m.portfolio_skills_frameworks()}</h2>
    <div class="items">
      {#each frameworks as framework}
        <div class="item">
          <h3>{technologies(framework)}</h3>
          <div>
            <TechnologyIcon technology={framework} size={iconSize} />
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .skills {
    padding: var(--s7) var(--s3);
    background-color: var(--grey3);
  }

  .title {
    text-align: center;
  }

  .content {
    max-width: 1000px;
    margin: 0 auto;
  }

  .items {
    padding: var(--s6) 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--s3);
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--s3);
    text-align: center;
  }
</style>

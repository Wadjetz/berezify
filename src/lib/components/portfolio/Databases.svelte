<script lang="ts">
  import Meilisearch from "virtual:icons/logos/meilisearch"
  import PostgreSql from "virtual:icons/logos/postgresql"
  import { m } from "$lib/paraglide/messages"
  import { type Technology, technologies } from "$lib/utils/technologies"

  const databases: Technology[] = ["postgreSql", "meilisearch"]

  const iconSize = 200
  const iconColor = "#ffffff"
</script>

<section class="skills">
  <div class="content">
    <h2 class="title">{m.portfolio_skills_databases()}</h2>
    <div class="items">
      {#each databases as database}
        <div class="item">
          <h3>{technologies(database)}</h3>
          <div>
            {#if database === "postgreSql"}
              <PostgreSql width={iconSize} height={iconSize} color={iconColor} />
            {:else if database === "meilisearch"}
              <Meilisearch width={iconSize} height={iconSize} color={iconColor} />
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .skills {
    padding: var(--s7) var(--s3);
    background-color: var(--color2);
    color: var(--color2-inverse);
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

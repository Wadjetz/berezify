<script lang="ts">
  import CssIcon from "virtual:icons/mdi/language-css3"
  import HtmlIcon from "virtual:icons/mdi/language-html5"
  import RustIcon from "virtual:icons/mdi/language-rust"
  import TypescriptIcon from "virtual:icons/mdi/language-typescript"

  import { m } from "$lib/paraglide/messages"
  import { type Technology, technologies } from "$lib/utils/technologies"

  const programmingLanguages: Technology[] = ["rust", "typescript", "css", "html"]

  const iconSize = 200
  const iconColor = "#ffffff"
</script>

<section class="skills">
  <div class="content">
    <h2 class="title">{m.portfolio_skills_programmingLanguages()}</h2>
    <div class="items">
      {#each programmingLanguages as programmingLanguage}
        <div class="item">
          <h3>{technologies(programmingLanguage)}</h3>
          <div>
            {#if programmingLanguage === "typescript"}
              <TypescriptIcon width={iconSize} height={iconSize} color={iconColor} />
            {:else if programmingLanguage === "html"}
              <HtmlIcon width={iconSize} height={iconSize} color={iconColor} />
            {:else if programmingLanguage === "css"}
              <CssIcon width={iconSize} height={iconSize} color={iconColor} />
            {:else if programmingLanguage === "rust"}
              <RustIcon width={iconSize} height={iconSize} color={iconColor} />
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

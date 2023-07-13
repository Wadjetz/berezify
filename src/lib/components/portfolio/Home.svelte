<script lang="ts">
  import illustration from "$lib/assets/illustration.svg"
  import { LL } from "$lib/i18n/i18n-svelte"
</script>

<section class="content">
  <div class="content-section">
    <h2>
      <span class="hello">{$LL.portfolio.home.hello()}</span>
      <br />
      <span class="iam">{$LL.portfolio.home.iam()}</span>
      <span class="description">{$LL.portfolio.home.description()}</span>
    </h2>
  </div>
  <div class="illustration-section">
    <img class="illustration" alt="illustration" src={illustration} />
  </div>
</section>

<style>
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--s5);
    padding: var(--s7) var(--s3);
    max-width: 1000px;
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    .content {
      grid-template-columns: 1fr;
    }
  }

  .content-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hello {
    font-size: var(--s3);
  }

  .iam {
    font-size: var(--s6);
    font-weight: bold;
  }

  .description {
    font-size: 0.9rem;
  }

  .illustration-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .illustration {
    max-width: 450px;
  }
</style>

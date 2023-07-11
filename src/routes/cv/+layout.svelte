<script lang="ts">
  import "$lib/theme/cv.css"
</script>

<main>
  <slot />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: var(--s4);
  }
</style>

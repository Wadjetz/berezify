<script lang="ts">
  import type { Snippet } from "svelte"

  interface Props {
    children?: Snippet
  }
  let { children }: Props = $props()
</script>

<main>
  {@render children?.()}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: var(--s4);
    padding-bottom: var(--s5);
  }
</style>

<script lang="ts">
  export let label: string
</script>

<div class="tag">
  <slot />
  {label}
</div>

<style>
  .tag {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: var(--s1);
    font-size: 0.7rem;
    padding: 3px 6px;
    border-radius: 4px;
    border: 1px solid var(--grey2);
  }
</style>

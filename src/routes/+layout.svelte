<script lang="ts">
  import { setLocale } from "$lib/i18n/i18n-svelte"
  import "$lib/theme/base.css"

  import type { LayoutData } from "./$types"

  export let data: LayoutData

  setLocale(data.locale)
</script>

<slot />

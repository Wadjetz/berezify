<script lang="ts">
  import { marked } from "marked"
  import sanitizeHtml from "sanitize-html"

  interface Props {
    source: string
  }

  let { source }: Props = $props()

  const html = $derived(marked.parse(sanitizeHtml(source)))
</script>

{@html html}

<script context="module">
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  })
</script>

<script lang="ts">
  import MarkdownIt from "markdown-it"

  export let source: string = ""
</script>

{@html md.render(source)}

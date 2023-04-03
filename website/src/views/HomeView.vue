<script setup lang="ts">
import MarkdownPreview from '@uivjs/vue-markdown-preview'
import { markdown } from '@uivjs/vue-markdown-preview/README.md'
import '@uivjs/vue-markdown-preview/markdown.css'
</script>

<template>
  <main>
    <markdown-preview class="markdown">
      {{ markdown }}
    </markdown-preview>
  </main>
</template>

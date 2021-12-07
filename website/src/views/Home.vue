<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <markdown-preview class="markdown">
      {{ markdown }}
    </markdown-preview>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import '@uivjs/vue-markdown-preview/markdown.css';
// import str from '@uivjs/vue-markdown-preview/README.md';
import str from '../../../README.md';

export default {
  name: 'Home',
  data() {
    return {
      markdown: str,
    };
  },
  components: {
    MarkdownPreview,
  },
};
</script>

<style scoped>
.markdown {
  text-align: left;
  max-width: 630px;
  padding-bottom: 120px;
}
</style>

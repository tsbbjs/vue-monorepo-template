<template>
  <div class="example">
    <template-base :title="String(count)" />
    <template-simple :title="String(count)" />
    {{ count }}
    <button @click="increment">
      Count is: {{ count }}
    </button>
  </div>
</template>

<script>
import MarkdownPreview from '@uivjs/vue-markdown-preview';
import '@uivjs/vue-markdown-preview/markdown.css';

import TemplateBase from '@vue-monorepo-template/base';
import TemplateSimple from '@vue-monorepo-template/simple';

export default {
  data() {
    return {
      count: 0,
      message: '',
    };
  },
  methods: {
    increment() {
      this.count += 1
    }
  },
  components: {
    TemplateBase,
    TemplateSimple
  },
};
</script>
<style scoped>
.example {
  max-width: 560px;
  margin: 0 auto;
  padding: 30px 0 60px 0;
}
.example .markdown-body {
  border-radius: 5px;
  margin-top: 16px;
  min-height: 30px;
}
.example textarea {
  border-radius: 5px;
  max-width: 100%;
  min-width: 100%;
  padding: 5px;
  box-sizing: border-box;
  display: block;
  min-height: 120px;
}
</style>

@vue-monorepo-template/base
===

```bash
npm i @vue-monorepo-template/base
```

```vue
<template>
  <div>
    <v-base title="002"></v-base>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VBase from '@vue-monorepo-template/base';

export default defineComponent({
  components: {
    VBase
  }
});
</script>
```
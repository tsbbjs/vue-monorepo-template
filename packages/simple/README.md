@vue-monorepo-template/simple
===

```bash
npm i @vue-monorepo-template/simple
```

```vue
<template>
  <div>
    <simple title="001"></simple>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Simple from '@vue-monorepo-template/simple';

export default defineComponent({
  components: {
    Simple
  }
});
</script>
```
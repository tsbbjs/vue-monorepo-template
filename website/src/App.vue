<template>
  <div>
    <github-corners fixed href="https://github.com/tsbbjs/vue-monorepo-template" />
    <simple title="@vue-monorepo-template/simple"></simple>
    <v-base title="@vue-monorepo-template/base"></v-base>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import GithubCorners from '@uivjs/vue-github-corners';
import Simple from '@vue-monorepo-template/simple';
import VBase from '@vue-monorepo-template/base';

export default defineComponent({
  components: {
    GithubCorners,
    Simple,
    VBase,
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 5px;
  background: #ededed;
  padding: 2px 8px;
  border-radius: 3px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

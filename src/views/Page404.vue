<template>
  <div class="page not-found">
      <div class="container-fluid inner">
          <h1 class="ops">Ooops... This is embarrassing.</h1>
          Page not found!
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Page404 extends Vue {
}
</script>

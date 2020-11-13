<template>
    <div class="common-form">
        <h2 class="form-header">
          {{ form.name }}
        </h2>
        <div class="container-fluid">
          <form class="row">
            <common-field v-for="field in fields" :field="field" :key="field.id" />
          </form>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  faSortAlphaUp,
} from '@fortawesome/free-solid-svg-icons';

@Component
export default class CommonForm extends Vue {
  // Component data
  @Prop() private form!: object;

  @Prop() private fields!: Array<object>;

  @Prop() private type!: string;

  @Prop() private ready?: boolean;

  faSortAlphaUp = faSortAlphaUp;
}
</script>

<style scoped lang="scss">

</style>

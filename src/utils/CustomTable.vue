<template>
    <div class="custom-table">
        <div class="row header">
            <div class="col" v-for="header in headers" :key="header.id" :class="header.size">
                {{ header.name }}
            </div>
        </div>
        <transition name="fade" mode="out-in">
          <div v-if="!ready" class="row ready" key="table-ready">
            <div class="spinner">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div v-else-if="contents.length === 0" class="row empty" key="table-empty">
            No results!
          </div>
          <div v-else key="table-rows">
            <router-link class="row"
                         v-for="content in contents"
                         :key="content.id"
                         :to="`${$route.path}/${content.id}`">
                <div class="col" v-for="header in headers" :key="header.id" :class="header.size">
                    <template v-if="header.type === 'date'">
                      {{ content[header.field] | moment("MM/DD/YYYY") }}
                    </template>
                    <template v-else>
                      {{ content[header.field] }}
                    </template>
                </div>
            </router-link>
          </div>
        </transition>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  faSortAlphaUp,
  faSortAlphaDownAlt,
  faSortNumericUp,
  faSortNumericDownAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component
export default class CustomTable extends Vue {
  // Component data
  @Prop() private headers!: Array<object>;

  @Prop() private contents!: Array<object>;

  @Prop() private ready?: boolean;

  faSortAlphaUp = faSortAlphaUp;

  faSortAlphaDownAlt = faSortAlphaDownAlt;

  faSortNumericUp = faSortNumericUp;

  faSortNumericDownAlt = faSortNumericDownAlt;
}
</script>

<style scoped lang="scss">

</style>

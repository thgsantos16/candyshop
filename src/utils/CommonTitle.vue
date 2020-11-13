<template>
    <div class="common-title" :class="title.class">
      <h1>
        {{ title.page }}
        <span v-if="title.help">
          <fa @mouseenter="showHelp = true"
              @mouseleave="showHelp = false"
              :icon="faQuestionCircle" />
          <transition name="fade">
            <div v-if="showHelp" class="help-text" v-html="title.help"></div>
          </transition>
        </span>

        <router-link v-if="title.showAdd" :to="`${$route.path}/add`">Add</router-link>
      </h1>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Title } from '@/types';

import {
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component
export default class TreeElement extends Vue {
  faQuestionCircle = faQuestionCircle;

  showHelp = false;

  // Component data
  @Prop() private title!: Title;
}
</script>

<style lang="scss">

.common-title {
  h1 {
    span {
      transition: all 0.43s;
      color: #AAA;
      font-size: 20px;
      margin: 16px 0 0 10px;
      display: inline-block;
      vertical-align: top;

      &:hover {
        color: #185091;
      }

      .help-text {
        position: absolute;
        padding: 16px 25px;
        border: 1px solid #CCC;
        color: #555;
        background-color: #FFF;
        margin: 7px 0 0 -7px;
        max-width: 50%;
        font-size: 16px;
        cursor: default;
        z-index: 2000;
        box-shadow: 2px 2px 7px #00000033;

        h4, h5, h6 {
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #CCC;
        }
      }
    }

    a {
      transition: all 0.43s;
      cursor: pointer;
      float: right;
      font-size: 16px;
      border: none;
      background-color: #AAA;
      color: #FFF;
      padding: 12px 25px;
      border-radius: 20px;
      margin-top: 7px;
      outline: none;

      &:hover {
        background-color: #185091;
        text-decoration: none;
      }
    }
  }
}

</style>

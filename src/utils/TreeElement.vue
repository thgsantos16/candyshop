<template>
    <div class="tree-element"
      :class="element.category">
      <div class="tree-header"
        :class="{ disabled: element.children.length === 0 }">
        <div class="checkbox" @click="toogleElement(element)">
            <fa v-if="element.children.length === 0" :icon="faSquare" />
            <fa v-else-if="element.checked" :icon="faMinusSquare" />
            <fa v-else :icon="faPlusSquare" />
        </div>
        <div class="title">{{ element.title }}</div>
      </div>
      <div class="content"
        v-if="element.children.length > 0"
        :class="{ collapsed: !element.checked }">
        <TreeElement
          @toogleElement="toogleElement"
          :element="child"
          v-for="child in element.children"
          :key="child.catgory" />
      </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Tree } from '@/types';
import {
  faPlusSquare,
  faMinusSquare,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';

@Component
export default class TreeElement extends Vue {
  faPlusSquare = faPlusSquare;

  faMinusSquare = faMinusSquare;

  faSquare = faSquare;

  // Component data
  @Prop() private element!: object;

  toogleElement(element: Tree) {
    this.$emit('toogleElement', element);
  }
}
</script>

<style scoped lang="scss">

.tree-element {
  font-size: 0;
  padding-left: 7px;
  overflow: hidden;

  .tree-header {
    transition: all 0.43s;
    padding: 5px 0;
    overflow: hidden;
    height: 34px;

    .checkbox {
      transition: all 0.43s;
      cursor: pointer;
      display: inline-block;
      width: 22px;
      height: 22px;
      vertical-align: top;
      font-size: 1rem;

      &:hover {
        color: #185091;
      }
    }

    .title {
      transition: all 0.43s;
      cursor: pointer;
      display: inline-block;
      width: calc(100% - 22px);
      font-size: 1rem;

      &:hover {
        color: #185091;
      }
    }

    &.disabled {
      cursor: default;

      .checkbox {
        pointer-events: none;
        color: #CCC;
        cursor: not-allowed;
      }
    }
  }

  .content {
    transition: all 0.43s;
    padding-left: 5px;

    &.collapsed {
      padding: 0;

      .tree-element {
        .tree-header {
          padding: 0;
          height: 0;
        }
      }

      .title, .checkbox {
        height: 0;
      }
    }
  }
}

</style>

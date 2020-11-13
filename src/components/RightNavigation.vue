<template>
  <nav class="right-nav">
    <vue-custom-scrollbar class="scroll-area">
      <div class="right-nav-content">

        <button class="form-control custom-button save-button">Save</button>

      </div>
    </vue-custom-scrollbar>
  </nav>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import { Tree } from '@/types';
import {
  faChevronCircleRight,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

@Component
export default class RightNavigation extends Vue {
  tree: Array<object>;

  faChevronCircleRight = faChevronCircleRight;

  faAngleDoubleRight = faAngleDoubleRight;

  currentScroll: object | null = null;

  constructor() {
    super();
    this.tree = [];
  }

  findElement(tree: Array<Tree> | undefined, element: Tree) {
    let found: Tree | undefined;

    if (tree) {
      tree.forEach((e) => {
        if (found === undefined) {
          if (e.url === element.url) {
            found = e;
          } else {
            found = this.findElement(e.children, element);
          }
        }
      });
    }

    return found;
  }

  toogleElement(element: Tree) {
    const item: Tree | undefined = this.findElement(this.tree, element);
    if (item) Vue.set(item, 'checked', !item.checked);
  }
}
</script>

<style scoped lang="scss">

@import 'node_modules/bootstrap/scss/bootstrap';

.right-nav {
    position: fixed;
    right: 0;
    top: 82px;
    height: 100%;
    background: #F7F7F7;
    width: 20%;
    border-left: #CCC solid 1px;

    .scroll-area {
        max-height: calc(100% - 83px);
        padding: 25px 25px 30px;
    }

    h2 {
      color: #185091;
      padding-bottom: 25px;
      margin-bottom: 25px;
    }

    &.custom-scroll {
      .custom-scroll-content {
        padding: 38px 34px 16px;
      }
    }
}

@include media-breakpoint-up(xl) {
    .right-nav {
        width: 304px;
    }
}

.tree-item {
  font-size: 0;
  padding-left: 3px;
  overflow: hidden;

  .tree-header {
    cursor: pointer;
    transition: all 0.43s;
    padding: 5px 0;
    overflow: hidden;
    height: 34px;
    color: #555;

    &:hover {
      color: #185091;
    }

    &.active {
      color: #333;
    }

    a {
      transition: all 0.43s;
      color: #555;

      &:hover {
        text-decoration: none;
        color: #185091;
      }

      &.router-link-exact-active {
        color: #185091;
        font-weight: 700;
      }
    }

    .checkbox {
      display: inline-block;
      width: 24px;
      height: 24px;
      vertical-align: top;
      font-size: 1.1rem;

      svg {
        transition: all 0.43s;
      }

      &.checked {
        svg {
          transform: rotateZ(90deg);
        }
      }
    }

    .title {
      display: inline-block;
      width: calc(100% - 24px);
      font-size: 1.1rem;
      padding-top: 2px;
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
    padding-left: 7px;

    &.collapsed {
      padding: 0;

      .tree-item {
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

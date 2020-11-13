<template>
  <nav class="main-nav custom-scroll">
    <vue-custom-scrollbar class="scroll-area">
      <div class="tree">
        <div class="tree-item" v-for="item in tree" :key="item.url">
          <div class="tree-header"
            :class="{ active: item.checked }"
            @click="toogleElement(item)">
            <div class="checkbox"
                  v-if="item.children.length > 0"
                  :class="{ checked: item.checked }">
                <fa :icon="faChevronCircleRight" />
            </div>
            <div class="checkbox" v-else>
                <fa :icon="faAngleDoubleRight" />
            </div>
            <div class="title" v-if="item.children.length > 0">{{ item.title }}</div>
            <div class="title" v-else>
              <router-link :to="`/${item.url}`">{{ item.title }}</router-link>
            </div>
          </div>
          <div class="content"
            v-if="item.children.length > 0"
            :class="{ collapsed: !item.checked }">
              <div class="tree-item"
                :class="{ disabled: child.children.length === 0 }"
                v-for="child in item.children"
                :key="child.catgory">
                <div class="tree-header"
                      @click="toogleElement(child)"
                      :class="{ active: child.checked }">
                  <div class="checkbox"
                        :class="{ checked: child.checked }"
                        v-if="child.children.length > 0">
                      <fa :icon="faChevronCircleRight" />
                  </div>
                  <div class="checkbox" v-else>
                      <fa :icon="faAngleDoubleRight" />
                  </div>
                  <div class="title" v-if="child.children.length > 0">{{ child.title }}</div>
                  <div class="title" v-else>
                    <router-link :to="`/${child.url}`">{{ child.title }}</router-link>
                  </div>
                </div>
                <div class="content"
                  v-if="child.children.length > 0"
                  :class="{ collapsed: !child.checked }">
                    <div class="tree-item"
                      v-for="gc in child.children"
                      :key="gc.catgory">
                      <div class="tree-header">
                        <div class="checkbox">
                            <fa :icon="faAngleDoubleRight" />
                        </div>
                        <div class="title">
                          <router-link :to="`/${gc.url}`">{{ gc.title }}</router-link>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
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
export default class CommonNavigation extends Vue {
  tree: Array<object>;

  faChevronCircleRight = faChevronCircleRight;

  faAngleDoubleRight = faAngleDoubleRight;

  currentScroll: object | null = null;

  constructor() {
    super();
    this.tree = [
      {
        title: 'Home',
        url: '',
        checked: true,
        children: [],
      },
      {
        title: 'Projects',
        url: 'projects-title',
        checked: false,
        children: [
          {
            title: 'Add new Project',
            url: 'projects/add',
            checked: false,
            children: [],
          },
          {
            title: 'List Projects',
            url: 'projects',
            checked: false,
            children: [],
          },
          {
            title: 'Latest Projects',
            url: 'projects/latest',
            checked: false,
            children: [
              {
                title: 'Latest Project 1',
                url: 'projects/projects-latest-1',
                checked: false,
                children: [],
              },
              {
                title: 'Latest Project 2',
                url: 'projects/projects-latest-2',
                checked: false,
                children: [],
              },
              {
                title: 'Latest Project 3',
                url: 'projects/projects-latest-3',
                checked: false,
                children: [],
              },
            ],
          },
        ],
      },
      {
        title: 'Towers',
        url: 'towers-title',
        checked: false,
        children: [
          {
            title: 'Add new Tower',
            url: 'towers/add',
            checked: false,
            children: [],
          },
          {
            title: 'List Towers',
            url: 'towers',
            checked: false,
            children: [],
          },
          {
            title: 'Latest Towers',
            url: 'towers/latest',
            checked: false,
            children: [],
          },
        ],
      },
      {
        title: 'Layouts',
        url: 'layout-title',
        checked: false,
        children: [
          {
            title: 'Add new Layout',
            url: 'layouts/add',
            checked: false,
            children: [],
          },
          {
            title: 'List Layouts',
            url: 'layouts',
            checked: false,
            children: [],
          },
          {
            title: 'Latest Layouts',
            url: 'layouts/latest',
            checked: false,
            children: [],
          },
        ],
      },
      {
        title: 'Slots',
        url: 'slot-title',
        checked: false,
        children: [
          {
            title: 'Add new Slot',
            url: 'slots/add',
            checked: false,
            children: [],
          },
          {
            title: 'List Slots',
            url: 'slots',
            checked: false,
            children: [],
          },
          {
            title: 'Latest Slots',
            url: 'slots/latest',
            checked: false,
            children: [],
          },
        ],
      },
      {
        title: 'Contents',
        url: 'content-title',
        checked: false,
        children: [
          {
            title: 'Add new Content',
            url: 'contents/add',
            checked: false,
            children: [],
          },
          {
            title: 'List Contents',
            url: 'contents',
            checked: false,
            children: [],
          },
          {
            title: 'Latest Contents',
            url: 'contents/latest',
            checked: false,
            children: [],
          },
        ],
      },
      {
        title: 'Models',
        url: 'model-title',
        checked: false,
        children: [
          {
            title: 'Add new Model',
            url: 'models/add',
            checked: false,
            children: [],
          },
          {
            title: 'List Models',
            url: 'models',
            checked: false,
            children: [],
          },
          {
            title: 'Latest Models',
            url: 'models/latest',
            checked: false,
            children: [],
          },
        ],
      },
      {
        title: 'Categories',
        url: 'category-title',
        checked: false,
        children: [
          {
            title: 'Add new Model',
            url: 'categories/add',
            checked: false,
            children: [],
          },
          {
            title: 'List Categories',
            url: 'categories',
            checked: false,
            children: [],
          },
          {
            title: 'Latest Categories',
            url: 'categories/latest',
            checked: false,
            children: [],
          },
        ],
      },
      {
        title: 'Configurations',
        url: 'configuration-title',
        checked: false,
        children: [
          {
            title: 'Add new Configuration',
            url: 'configurations/add',
            checked: false,
            children: [],
          },
          {
            title: 'List Configurations',
            url: 'configurations',
            checked: false,
            children: [],
          },
          {
            title: 'Latest Configurations',
            url: 'configurations/latest',
            checked: false,
            children: [],
          },
        ],
      },
    ];
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

$border-top: #444;
$border-bottom: #222;
$bg-color: #343842;

.main-nav {
    position: fixed;
    left: 0;
    top: 82px;
    height: 100%;
    background: $bg-color;
    width: 20%;
    border-right: #CCC solid 1px;

    .scroll-area {
        max-height: calc(100% - 83px);
        padding: 0px 0px 30px;
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
    .main-nav {
        width: 304px;
    }
}

.tree-item {
  font-size: 0;
  overflow: hidden;

  .tree-header {
    cursor: pointer;
    transition: all 0.43s;
    padding: 5px 16px;
    overflow: hidden;
    height: 43px;
    color: #CCC;
    border-top: solid 1px $border-top;
    border-bottom: solid 1px $border-bottom;

    &:hover {
      color: #FFF;
    }

    &.active {
      color: #FFF;
    }

    a {
      transition: all 0.43s;
      color: #CCC;

      &:hover {
        text-decoration: none;
        color: #FFF;
      }

      &.router-link-exact-active {
        color: #FFF;
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

    & > .tree-item {
      & > .tree-header {
        background: lighten($bg-color, 3%);
        border-bottom-color: lighten($border-bottom, 3%);
        border-top-color: lighten($border-top, 3%);
        padding-left: 28px;
      }

      & > .content {
        & > .tree-item {
          & > .tree-header {
            background: lighten($bg-color, 7%);
            border-bottom-color: lighten($border-bottom, 7%);
            border-top-color: lighten($border-top, 7%);
            padding-left: 40px;
          }
        }
      }
    }

    &.collapsed {
      padding: 0;

      .tree-item {
        .tree-header {
          padding: 0;
          height: 0;
          border-top: solid 0px $border-top;
          border-bottom: solid 0px $border-bottom;
        }
      }

      .title, .checkbox {
        height: 0;
      }
    }
  }
}
</style>

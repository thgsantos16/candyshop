<template>
  <div id="app">
    <vue-headful :title="pageTitle" />

    <transition name="fade" appear>
      <CommonHeader v-if="showHeader" />
    </transition>

    <transition name="fade" appear>
      <CommonNavigation v-if="showNav" />
    </transition>

    <transition name="fade" mode="out-in" appear>
      <router-view :class="{ 'has-right': showRightNav }" />
    </transition>

    <transition name="fade" appear>
      <RightNavigation v-if="showRightNav" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CommonHeader from '@/components/CommonHeader.vue';
import CommonFooter from '@/components/CommonFooter.vue';
import RightNavigation from '@/components/RightNavigation.vue';
import CommonNavigation from '@/components/CommonNavigation.vue';

@Component({
  components: {
    CommonHeader,
    CommonFooter,
    RightNavigation,
    CommonNavigation,
  },
})
export default class App extends Vue {
  beforeCreate() {
    const url = window.location.hostname === 'localhost'
      ? 'http://localhost:8000'
      : 'https://candyshop-be.herokuapp.com';
    this.$store.dispatch('setApiUrl', url);
  }

  get showNav() {
    return this.$route.name !== 'Login';
  }

  get showHeader() {
    return this.$route.name !== 'Login';
  }

  get pageTitle() {
    if (this.$route.name === 'Home') {
      return 'CandySHop';
    }

    return `${this.$route.name} | CandySHop`;
  }

  get showRightNav() {
    return this.$route.name !== 'Login'
        && this.$route.name === 'Add Project';
  }
}
</script>

<style lang="scss">

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

// Common Styles

body {
  background-color: #FFF;
}

a {
  transition: all 0.43s;
}

// Common Page Styles

.page {
  padding: 115px 34px 0 calc(20% + 34px);

  &.no-nav {
    padding: 115px 25px 52px;
    width: 80%;
    max-width: 1240px;
    margin: 0 auto;
    background-color: #FFF;
    z-index: 10;
    box-shadow: 0px 0px 7px #00000033;
  }

  &.has-right {
    padding: 115px calc(20% + 34px) 0;
  }

  h1 {
    color: #185091;
    border-bottom: 1px solid #999;
    padding-bottom: 25px;
    margin-bottom: 34px;
  }
}

.custom-table {
  border: 1px solid #CACACA;

  .row {
    transition: all 0.43s;
    padding: 16px;
    margin: 0;
    background-color: #EEE;
    color: #212529;
    text-decoration: none;

    &:nth-child(even) {
      background-color: #E7E7E7;
    }

    &:hover {
      background-color: #DDD;
    }

    &.ready {
      background-color: #FFF;
    }

    &.header {
      background-color: #c5cdd4;
      font-weight: bold;
    }
  }
}

.buttons {
  margin-top: 20px;

  .form-control.custom-button {
    padding: 12px 0 34px;

    &.save-button {
      background-color: #185091;
      color: #FFF;
    }
  }
}

// Common Animations
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

// Import responsive styles
@import 'sass/custom-scroll';
@import 'sass/responsive';
@import 'sass/spinner';

</style>

<template>
  <header class="main-header container-fluid">
      <div class="row">
        <div class="col-xl-2 col-lg-1">
          <router-link class="logo" to="/"></router-link>
        </div>

        <div class="col">
          <nav>
            <router-link class="header-link" to="/">Home</router-link>
            <router-link class="header-link" to="/projects">Projects</router-link>
            <router-link class="header-link" to="/towers">Towers</router-link>
            <router-link class="header-link" to="/layouts">Layouts</router-link>
            <router-link class="header-link" to="/slots">Slots</router-link>
            <router-link class="header-link" to="/contents">Contents</router-link>
            <router-link class="header-link" to="/models">Models</router-link>
            <router-link class="header-link" to="/configurations">Configurations</router-link>
          </nav>
        </div>

        <div class="col-auto">
          <div class="login-register">
            <div class="name">{{ username }}</div>
            <div class="image"></div>
          </div>
        </div>
      </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CommonHeader extends Vue {
  get username() {
    return this.$store.getters.USER.nickname;
  }
}
</script>

<style scoped lang="scss">

@import "bootstrap/scss/bootstrap";

header {
  background-color: #181a1f;
  padding: 12px;
  position: fixed;
  z-index: 2000;

  .logo {
    display: inline-block;
    background-image: url('../assets/logo.png');
    background-repeat: no-repeat;
    width: 255px;
    height: 52px;
    background-size: contain;
  }

  nav {
    padding: 14px;
    text-align: center;

    a {
      color: #FFF;
      font-size: 20px;
      display: inline-block;
      margin: 0 2%;

      &:first-of-type {
        margin-left: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }

      &:after {
        transition: all 0.43s;
        content: "";
        display: block;
        width: 36px;
        height: 18px;
        position: relative;
        bottom: -8px;
        margin-bottom: -34px;
        left: calc(50% - 18px);
        background-image: url('../assets/link-decoration.png');
        opacity: 0;
      }

      &:hover {
        color: #CCC;
        text-decoration: none;
      }

      &.router-link-exact-active {
        color: #206CC0;

        &:after {
          opacity: 1;
        }
      }
    }
  }

  .login-register {
    background-color: #185091;
    min-width: 10vw;
    height: calc(100% + 24px);
    margin: -12px -15px;
    margin-left: 0;

    .name {
      vertical-align: top;
      display: inline-block;
      padding: 26px 16px 0 25px;
      font-weight: 700;
      font-size: 20px;
      color: #FFF;
    }

    .image {
      width: 61px;
      height: 61px;
      background-color: #FFF;
      border-radius: 100%;
      display: inline-block;
      margin: 10px 16px 0;
    }
  }
}

// Import responsive styles
@import '../sass/responsive';

</style>

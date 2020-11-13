<template>
  <div class="page login">
    <div class="inner">
      <img src="../assets/logo-white.png" />

      <div class="form">
        <h1>Welcome!</h1>
        <div class="subtitle">
          <span>Candyshop</span> is one Log in away (;
        </div>

        <div class="error" :class="{ show: error }">
          {{ error }}
        </div>

        <label>Email</label>
        <input v-model="email" class="form-control">

        <label>Password</label>
        <input v-model="password" type="password" class="form-control">

        <button :disabled="buttonDisabled || loading"
                class="form-control"
                @click="dologin()"
                :class="{ gray: loading }">
          <span key="text" v-if="!loading">Log In</span>
          <span key="loading" v-else>
            <div class="spinner gray small">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </span>
        </button>

        <div class="help-text">
          <p>Are you new arround here? <a>Sign up</a></p>
          <p>Did you password ran away? You can always <a>Reset it!</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Token } from '@/types';
import { Component, Vue } from 'vue-property-decorator';
import FormData from 'form-data';

@Component
export default class Login extends Vue {
  email = '';

  password = '';

  loading = false;

  error = '';

  get buttonDisabled() {
    return this.email === '' || this.password === '';
  }

  dologin() {
    const data = new FormData();
    data.append('email', this.email);
    data.append('password', this.password);
    this.loading = true;
    this.error = '';

    this.axios({ method: 'post', url: `${this.$store.state.apiUrl}/login`, data }).then((response) => {
      const token = response.data as Token;
      this.$store.dispatch('setToken', response.data);

      this.axios({
        method: 'get',
        url: `${this.$store.state.apiUrl}/profile`,
        headers: {
          Authorization: `${token.token_type} ${token.token}`,
        },
      }).then((response2) => {
        this.$store.dispatch('setUser', response2.data.user);
        this.loading = false;
        this.$router.push('/');
      });
    }).catch((error) => {
      console.error(error);
      this.error = "Oops the user/password didn't match!";
      this.loading = false;
    });

    return this;
  }
}
</script>

<style lang="scss" scoped>

.page.login {
  background-image: url('../assets/login-bg.jpg');
  padding: 0;
  display: table;
  width: 100%;
  height: 100%;
  position: absolute;

  .error {
    transition: all 0.43s;
    color: #FFF;
    background: #b52331CC;
    padding: 0px;
    border-radius: 5px;
    overflow: hidden;
    height: 0;

    &.show {
      height: 48px;
      padding: 12px;
    }
  }

  .inner {
    display: table-cell;
    text-align: center;
    vertical-align: middle;

    img {
      margin-top: -34px;
      margin-bottom: 25px;
    }

    .form {
        width: 520px;
        margin: 25px auto;
        background-color: #FFF;
        padding: 34px 70px;

        h1 {
          border: none;
          color: #111;
        }

        .subtitle {
          font-size: 20px;
          font-weight: 700;
          color: #777;
          margin: -43px 0 34px;

          span {
            color: #185091;
          }
        }

        label {
          display: block;
          margin: 25px 0 7px;
          text-align: left;
        }

        input {
          border: 2px solid #777;
          background-color: #EBF3FC;
          padding: 12px 16px;
          height: auto;
        }

        button {
          transition: all 0.43s;
            color: #FFF;
            background-color: #185091;
            margin-top: 25px;
            margin-bottom: 25px;
            padding: 14px 0;
            height: auto;
            overflow: hidden;
            height: 54px;

            &:disabled {
              background-color: #999;
              cursor: not-allowed;
              pointer-events: none;
            }

            &.gray {
              background-color: #999;
              padding: 0;
            }
        }

        .help-text {
          color: #888;

          p {
            margin-bottom: 7px;
          }

          a {
            transition: all 0.43s;
            color: #185091;
            text-decoration: underline;
            cursor: pointer;

            &:hover {
              color: #111;
            }
          }
        }
    }
  }
}

</style>

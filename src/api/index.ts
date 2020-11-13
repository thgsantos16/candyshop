import Vue from 'vue';
import { Token } from '@/types';

const ApiGET = new Vue({
  methods: {
    getWithAuth(url: string, token: Token) {
      return this.axios.get(url, {
        headers: {
          Authorization: `${token.token_type} ${token.token}`,
        },
      });
    },
  },
});

export default ApiGET;

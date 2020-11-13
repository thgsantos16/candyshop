<template>
  <div class="page towers">
    <div class="container-fluid">
      <common-title :title="titleObject" />

      <custom-table :headers="headers" :contents="towers" :ready="ready" />
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Towers extends Vue {
  // Component data
  headers: Array<object>;

  towers: Array<object>;

  titleObject: object;

  ready = false;

  constructor() {
    super();

    this.towers = [];

    this.titleObject = {
      page: 'Towers',
      help: 'This page is the tower page',
      showAdd: true,
    };

    this.headers = [
      {
        id: 1,
        field: 'name',
        name: 'Item Name',
        size: 'col-4',
      },
      {
        id: 2,
        field: 'category',
        name: 'Category',
        size: 'col-2',
      },
      {
        id: 3,
        field: 'date',
        name: 'Creation Date',
        size: 'col-2',
      },
      {
        id: 4,
        field: 'status',
        name: 'Status',
        size: 'col-2',
      },
      {
        id: 5,
        field: 'author',
        name: 'Author',
        size: 'col-2',
      },
    ];
  }

  beforeCreate() {
    const url = `${this.$store.state.apiUrl}/contents/model/tower`;
    const token = this.$store.getters.TOKEN;

    this.axios.get(url, {
      headers: {
        Authorization: `${token.token_type} ${token.token}`,
      },
    })
      .then((response) => {
        this.ready = true;
        this.towers = response.data;
      })
      .catch((error) => {
        console.error(error);
        this.$store.dispatch('logoff');
        this.$router.push('/login');
      });
  }
}
</script>

<style scoped lang="scss">

</style>

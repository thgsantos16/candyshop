<template>
  <div class="page configurations">
    <div class="container-fluid">
      <common-title :title="titleObject" />

      <custom-table :headers="headers" :contents="configurations" :ready="ready" />
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Configurations extends Vue {
  // Component data
  headers: Array<object>;

  configurations: Array<object>;

  titleObject: object;

  ready = false;

  constructor() {
    super();

    this.titleObject = {
      page: 'Configurations',
      help: 'This page is the configuration page',
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

    this.configurations = [];
  }

  beforeCreate() {
    const url = `${this.$store.state.apiUrl}/contents/model/configuration`;
    const token = this.$store.getters.TOKEN;

    this.axios.get(url, {
      headers: {
        Authorization: `${token.token_type} ${token.token}`,
      },
    })
      .then((response) => {
        this.ready = true;
        this.configurations = response.data;
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

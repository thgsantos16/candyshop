<template>
  <div class="page contents">
    <div class="container-fluid">
      <common-title :title="titleObject" />

      <custom-table :headers="headers" :contents="contents" :ready="ready" />
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contents extends Vue {
  // Component data
  headers: Array<object>;

  contents: Array<object>;

  titleObject: object;

  ready = false;

  constructor() {
    super();

    this.titleObject = {
      page: 'Contents',
      help: 'This page is the content page',
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
        field: 'model',
        name: 'Model',
        size: 'col-2',
      },
      {
        id: 3,
        field: 'created_at',
        name: 'Creation Date',
        size: 'col-2',
        type: 'date',
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

    this.contents = [];
  }

  beforeCreate() {
    const url = `${this.$store.state.apiUrl}/contents/model/content`;
    const token = this.$store.getters.TOKEN;

    this.axios.get(url, {
      headers: {
        Authorization: `${token.token_type} ${token.token}`,
      },
    })
      .then((response) => {
        this.ready = true;
        this.contents = response.data;
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

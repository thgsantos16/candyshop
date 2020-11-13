<template>
  <div class="page models single">
    <div class="container-fluid">
      <common-title :title="titleObject" />

      {{ model }}
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SingleModels extends Vue {
  // Component data
  headers: Array<object>;

  model: object;

  titleObject: object;

  ready = false;

  constructor() {
    super();

    this.model = {};

    this.titleObject = {};

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
  }

  beforeCreate() {
    const url = `${this.$store.state.apiUrl}/models/${this.$route.params.id}`;
    const token = this.$store.getters.TOKEN;

    this.axios.get(url, {
      headers: {
        Authorization: `${token.token_type} ${token.token}`,
      },
    })
      .then((response) => {
        this.ready = true;
        this.model = response.data;
        this.titleObject = {
          page: response.data.name,
          help: 'This page is the model page',
        };
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

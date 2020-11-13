<template>
  <div class="page projects">
    <div class="container-fluid">
      <common-title :title="titleObject" />

      <custom-table :headers="headers" :contents="projects" />
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CategoriesProjects extends Vue {
  // Component data
  headers: Array<object>;

  projects: Array<object>;

  titleObject: object;

  constructor() {
    super();

    this.titleObject = {
      page: 'Projects',
      help: `<h4>Project Page</h4>
              This page is the project page`,
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

    this.projects = [
      {
        id: 1,
        name: 'First Project',
        category: 'Home page',
        date: '04/08/2019',
        status: 'Published',
        author: 'Thiago Cruz',
      },
      {
        id: 2,
        name: 'Second Project',
        category: 'Home page',
        date: '04/08/2019',
        status: 'Published',
        author: 'Thiago Cruz',
      },
    ];
  }
}
</script>

<style scoped lang="scss">

</style>

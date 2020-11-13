<template>
  <div class="page form">
    <div class="container-fluid">
      <common-title :title="titleObject" />

      <common-form type="add" :fields="fields" :form="form" :ready="true" />

      <div class="container-fluid">
        <div class="buttons row justify-content-end">
          <div class="col-md-3">
            <button class="form-control custom-button">Cancel</button>
          </div>
          <div class="col-md-3">
            <button class="form-control custom-button save-button">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AddProjects extends Vue {
  // Component data
  fields: Array<object>;

  form: Array<object>;

  titleObject: object;

  constructor() {
    super();

    this.titleObject = {
      page: 'Add new Project',
      help: `<h4>Add new Project page</h4>
              This page is the project page`,
    };

    /*
    name: string;
    uuid: string;
    model: BigInteger;
    status: string;
    description?: Text;
    category
    */

    this.fields = [
      {
        id: 1,
        name: 'name',
        label: 'Project Name',
        size: 'col-4',
        type: 'text',
      },
      {
        id: 2,
        name: 'uuid',
        label: 'UUID',
        size: 'col-4',
        type: 'text',
        autofill: true,
        copyFrom: 1,
        copyStyle: 'kebabcase',
        readOnly: true,
      },
      {
        id: 3,
        name: 'model',
        label: 'Model',
        size: 'col',
        type: 'hidden',
        value: 5,
      },
      {
        id: 4,
        name: 'status',
        label: 'Project Status',
        size: 'col-4',
        type: 'select',
        selectOptions: [
          {
            value: 'draft',
            option: 'Draft',
          },
          {
            value: 'published',
            option: 'Published',
          },
        ],
      },
      {
        id: 5,
        name: 'description',
        label: 'Project Description',
        size: 'col-8',
        type: 'textarea',
      },
      {
        id: 6,
        name: 'category',
        label: 'Project Category',
        size: 'col-4',
        type: 'select',
        selectOptions: [
          {
            value: 'draft',
            option: 'Draft',
          },
          {
            value: 'published',
            option: 'Published',
          },
        ],
      },
    ];

    this.form = [
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

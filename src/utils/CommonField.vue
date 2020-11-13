<template>
    <div class="common-field" :class="field.size" v-show="field.type !== 'hidden'">
      <template v-if="field.type === 'text'">
        <div class="form-group">
          <label>
            {{ field.label }}
          </label>

          <input type="text"
                 class="form-control"
                 :aria-describedby="field.name"
                 :placeholder="field.placeholder"
                 :readonly="field.readOnly">
        </div>
      </template>
      <template v-else-if="field.type === 'textarea'">
        <div class="form-group">
          <label>
            {{ field.label }}
          </label>

          <textarea
                 class="form-control"
                 :aria-describedby="field.name"
                 :placeholder="field.placeholder"
                 :readonly="field.readOnly">
          </textarea>
        </div>
      </template>
      <template v-else-if="field.type === 'hidden'">
        <div class="form-group">
          <input type="text"
                 class="form-control"
                 :aria-describedby="field.name"
                 :placeholder="field.placeholder"
                 :readonly="field.readOnly"
                 :value="field.value">
        </div>
      </template>
      <template v-else-if="field.type === 'select'">
        <div class="form-group">
          <label>
            {{ field.label }}
          </label>

          <select type="text"
                 class="form-control"
                 :aria-describedby="field.name"
                 :placeholder="field.placeholder"
                 :readonly="field.readOnly">
            <option v-for="option in field.selectOptions"
                    :key="option.value"
                    :value="option.value">
                    {{ option.option }}
            </option>
          </select>
        </div>
      </template>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  faSortAlphaUp,
} from '@fortawesome/free-solid-svg-icons';

@Component
export default class CommonForm extends Vue {
  // Component data
  @Prop() private field!: object;

  faSortAlphaUp = faSortAlphaUp;
}
</script>

<style scoped lang="scss">

</style>

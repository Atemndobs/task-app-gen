<template>
  <form @submit.prevent="handleSubmit(item)">
    <div class="form-group">
      <label
        for="task_name"
        class="form-control-label">name</label>
        <input
          id="task_name"
          v-model="item.name"
          :class="['form-control', !isValid('name') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('name')"
        class="invalid-feedback">{{ violations.name }}</div>
    </div>
    <div class="form-group">
      <label
        for="task_status"
        class="form-control-label">status</label>
        <input
          id="task_status"
          v-model="item.status"
          :class="['form-control', !isValid('status') ? 'is-invalid' : 'is-valid']"
          type="checkbox"
          placeholder="">
      <div
        v-if="!isValid('status')"
        class="invalid-feedback">{{ violations.status }}</div>
    </div>
    <div class="form-group">
      <label
        for="task_assignee"
        class="form-control-label">assignee</label>
        <select
          v-model="item.assignee"
          id="task_assignee"
          multiple
          class="form-control"
        >
          <option v-for="selectItem in assigneeSelectItems"
                  :key="selectItem['@id']"
                  :value="selectItem['@id']"
                  :selected="isSelected('assignee', selectItem['@id'])">{{ selectItem.name }}
          </option>
        </select>
      <div
        v-if="!isValid('assignee')"
        class="invalid-feedback">{{ violations.assignee }}</div>
    </div>
    <div class="form-group">
      <label
        for="task_description"
        class="form-control-label">description</label>
        <input
          id="task_description"
          v-model="item.description"
          :class="['form-control', !isValid('description') ? 'is-invalid' : 'is-valid']"
          type="text"
          placeholder="">
      <div
        v-if="!isValid('description')"
        class="invalid-feedback">{{ violations.description }}</div>
    </div>

    <button
      type="submit"
      class="btn btn-success">Submit</button>
  </form>
</template>

<script>
  import { find, get, isUndefined } from 'lodash';
  import { mapFields } from 'vuex-map-fields';
  import { mapActions } from 'vuex';

  export default {
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },

    values: {
      type: Object,
      required: true,
    },

    errors: {
      type: Object,
      default: () => {},
    },

    initialValues: {
      type: Object,
      default: () => {},
    }
  },

  mounted() {
    this.assigneeGetSelectItems();
  },

  computed: {
    ...mapFields('assignee/list', {
      'assigneeSelectItems': 'selectItems',
    }),

    // eslint-disable-next-line
    item() {
      return this.initialValues || this.values;
    },

    violations() {
      return this.errors || {};
    },
  },

  methods: {
    ...mapActions({
        assigneeGetSelectItems: 'assignee/list/getSelectItems',
    }),

    isSelected(collection, id) {
      return find(this.item[collection], ['@id', id]) !== undefined;
    },

    isValid(key) {
      return isUndefined(get(this.violations, key));
    },
  },
};
</script>

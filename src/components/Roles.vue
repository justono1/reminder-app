<template lang="html">
  <div class="roles">
    <h2>Created Roles</h2>
    <div class="new-role">
      <form action="" @submit.prevnet="addRole">
        <input type="text" ref="roleTitle" placeholder="Enter role title" />
        <input type="submit" @click.prevent="addRole" value="Add Role" />
      </form>
    </div>
    <ul>
      <li v-for="role in roles" :key="role.id" >Title: {{role.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'roles',
  computed: {
    roles() {
      return this.$store.state.roles;
    }
  },
  methods: {
    addRole() {
      this.roles.push({
        title: this.$refs.roleTitle.value
      });
      this.$store.commit({
        type: 'ADD_PERSON',
        title: this.$refs.roleTitle.value
      });
      this.$refs.roleTitle.value = '';
    }
  }
};
</script>

<style lang="css">
</style>

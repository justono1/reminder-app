<template lang="html">
  <div class="people">
    <h2>Created Roles</h2>
    <div class="new-person">
      <form action="" @submit.prevent="addPerson">
        <input type="text" ref="personName" placeholder="Name" />
        <input type="text" ref="personEmail" placeholder="Email" />
        <input type="text" ref="personPhone" placeholder="Phone" />
        <input type="submit" value="Add Person" />
      </form>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people" :key="person.id">
          <td>{{person.name}}</td>
          <td>{{person.email}}</td>
          <td>{{person.phone}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'people',
  computed: {
    people() {
      return this.$store.state.people;
    }
  },
  methods: {
    addPerson() {
      const name = this.$refs.personName.value;
      const email = this.$refs.personEmail.value;
      const phone = this.$refs.personPhone.value;

      this.$store.commit({
        type: 'ADD_PERSON',
        name: name,
        email: email,
        phone: phone
      });

      this.$refs.personName.value = '';
      this.$refs.personEmail.value = '';
      this.$refs.personPhone.value = '';
    }
  }
};
</script>

<style lang="css">
</style>

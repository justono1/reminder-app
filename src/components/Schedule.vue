<template lang="html">
  <div>
    <div class="new-schedule">
      <form action="">
        <input type="date" name="eventDate" v-model="eventDate">
        <input type="date" name="reminderDate" v-model="reminderDate">
        <div class="new-schedule__people">
          <label for="selectPerson">Select Person</label>
          <select v-model="selectedPerson" id="selectedPerson">
            <option :value="null">Select Person</option>
            <option v-for="person in allPeople" :value="person.id">{{person.name}}</option>
          </select>
          <label for="selectRole">Select Role</label>
          <select v-model="selectedRole" id="selectedRole">
            <option :value="null">Select Role</option>
            <option v-for="role in allRoles" :value="role.id">{{role.title}}</option>
          </select>

          <button type="button" @click="addToSchedule">Add to Schedule</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'schedule',
  data() {
    return {
      eventDate: moment().format('YYYY-MM-DD'),
      reminderDate: moment().format('YYYY-MM-DD'),
      selectedPerson: undefined,
      selectedRole: undefined,
      scheduledPeople: []
    };
  },
  methods: {
    addToSchedule() {
      if (
        this.selectedPerson !== undefined &&
        this.selectedRole !== undefined
      ) {
        this.scheduledPeople.push({
          personid: this.selectedPerson,
          roleid: this.selectedRole,
          remind: true
        });

        this.selectedPerson = undefined;
        this.selectedRole = undefined;
      }
    }
  },
  computed: {
    allPeople() {
      return this.$store.state.people;
    },
    allRoles() {
      return this.$store.state.roles;
    }
  }
};
</script>

<style lang="css">
</style>

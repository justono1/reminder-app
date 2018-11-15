<template lang="html">
  <div class="inner-container">
    <h1>Dashboard</h1>
    <div class="row">
      <div class="column">
        <Roles />
      </div>
      <div class="column">
        <People />
      </div>
    </div>
    <div class="row">
      <h1>Schedule</h1>
      <Schedule />
    </div>
  </div>
</template>

<script>
import Roles from '@/components/Roles';
import People from '@/components/People';
import Schedule from '@/components/Schedule';

export default {
  name: 'dashboard',
  components: {
    Roles,
    People,
    Schedule
  }
};
</script>

<style lang="css">
</style>

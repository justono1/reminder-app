<template lang="html">
  <nav>
    <div class="inner-container">
      <ul>
        <li><router-link to="/">Dashboard</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation'
};
</script>

<style lang="css">
  nav {
    width: 100%;
    background: #ccc;
  }
  nav li {
    list-style: none;
    display: inline-block;
    margin-right: 20px;
  }
  nav li:last-child {
    margin-right: 0;
  }
</style>

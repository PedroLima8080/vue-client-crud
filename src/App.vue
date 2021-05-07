<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="px-4">
        <router-link to="/" class="navbar-brand">CRUD</router-link>
      </div>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/persons" class="nav-link">Pessoas</router-link>
        </li>
      </div>
    </nav>

    <div class="mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
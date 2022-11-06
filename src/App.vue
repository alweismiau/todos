<template>
  <header class="site-header">
    <div class="wrapper site-header__wrapper">
      <div class="wrapper">
        <nav>
          <RouterLink to="/">TO DO LIST</RouterLink> |
          <RouterLink to="/task">TASK</RouterLink>|
          <RouterLink to="/Work">WORK</RouterLink> |
          <RouterLink to="/College">COLLEGE</RouterLink> |
          <RouterLink to="/Wishlist">WISH LIST</RouterLink> |
          <RouterLink to="/Daily">DAILY</RouterLink>
        </nav>
      </div>
    </div>

  </header>
  

  <RouterView />
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

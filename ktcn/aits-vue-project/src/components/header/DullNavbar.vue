<template>
  <li>
    <a href="https://m.aits.vn/" target="_blank" rel="noopener">Hệ sinh thái m.Aits</a>
  </li>
  <li>
    <router-link to="contact">Liên hệ</router-link>
  </li>
</template>

<style scoped>
li {
  display: inline-block;
  margin: 0 8px;
  line-height: 80px;
}

a {
  text-decoration: none;
  color: #6c707c;
  font-size: 22px;
  border: 1px solid transparent;
  padding: 10px 15px;
  border-radius: 4px;
  transition: ease .40s;
}

a:hover {
  background: #fbbf24;
  color: #b3a192;
  box-shadow: 5px 10px 30px rgb(85 85 85 / 20%);
  border-radius: 20px;
}

a.router-link-exact-active {
  background-color: #fbbf24;
  border-radius: 20px;
}
</style>

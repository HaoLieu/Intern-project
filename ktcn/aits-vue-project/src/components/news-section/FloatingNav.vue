<template>
    <li>
      <router-link :to="{ name: url, params: { id: id } }">{{ title }}</router-link>
    </li>
    <hr>
</template>

<script>
export default {
  props: ['id', 'url', 'title']
}
</script>

<style scoped>
  li {
    list-style: none;
    margin: 10px 0px 0px;
    margin-left: 15px;
    position: relative;
  }

  a::before {
    content: '•'; /* Bullet symbol */
    position: absolute;
    left: -15px;
    top: -2px;
    font-size: 19px; /* Set the size of the bullet */
    color: #374151;
    transition: color 0.2s ease-in;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 11px;
    color: #2b3442;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s ease-in;
  }

   a:hover, a:hover::before {
    color: #1E90FF;
  }

  hr {
    border-top: 2px dashed #d1d5db;
    margin: 5px 0px 7px;
  }
</style>

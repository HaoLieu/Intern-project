<template>
  <section>
    <img src="../../assets/background-products-card.jpeg">
    <slot></slot>
  </section>
</template>

<style scoped>
  section {
    max-width: 100%;
    height: 600px;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    opacity: 0.75;
    position: relative;
    z-index: 1;
    filter: brightness(35%);
  }
</style>

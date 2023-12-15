<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    background-color: rgb(44, 44, 84);
    width: 100%;
    height: 80px;
    display: flex;
    align-items: left;
    border: none;
    cursor: pointer;
    /* border: 1px solid white; */
  }
</style>

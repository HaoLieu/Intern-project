<template>
  <table>
    <tr class="header">
      <th>STT</th>
      <th>Tiêu đề</th>
      <th>Ngày công bố</th>
      <th>Năm</th>
      <th>Tải xuống</th>
    </tr>
    <tr v-for="abnormalDoc in abnormalDocs" :key="abnormalDoc.id">
      <td>{{ abnormalDoc.id }}</td>
      <td class="title">{{ abnormalDoc.title }}</td>
      <td>{{ abnormalDoc.dateUpload }}</td>
      <td>{{ abnormalDoc.year }}</td>
      <td><img src="../../assets/icon download.png"></td>
    </tr>
  </table>
</template>

<script>
export default {
  computed: {
    abnormalDocs () {
      return this.$store.getters['documents/abnormalDocsData']
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

th,
td {
  border-collapse: collapse;
  text-align: center;
  border-bottom: 1px solid #DDD;
  padding: 8px;
}

tr:not(:first-child):hover {
  background-color: rgb(248, 248, 248);
}

td {
  padding: 20px;
}

th {
  padding: 25px;
}

.header {
  background-color: #FFE4C4;
}

.title {
  text-align: left;
}
</style>

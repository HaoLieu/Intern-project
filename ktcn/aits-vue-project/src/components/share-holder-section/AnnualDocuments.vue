<template>
  <table>
    <tr class="header">
      <th>STT</th>
      <th>Tiêu đề</th>
      <th>Ngày công bố</th>
      <th>Năm</th>
      <th>Tải xuống</th>
    </tr>
    <tr v-for="annualDoc in annualDocs" :key="annualDoc.id">
      <td>{{ annualDoc.id }}</td>
      <td class="title">{{ annualDoc.title }}</td>
      <td>{{ annualDoc.dateUpload }}</td>
      <td>{{ annualDoc.year }}</td>
      <td><img src="../../assets/icon download.png"></td>
    </tr>
  </table>
</template>

<script>
export default {
  computed: {
    annualDocs () {
      return this.$store.getters['documents/annualDocsData']
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

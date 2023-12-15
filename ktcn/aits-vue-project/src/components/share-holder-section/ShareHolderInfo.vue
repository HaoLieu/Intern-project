<template>
  <table>
    <tr class="header">
      <th>STT</th>
      <th>Tiêu đề</th>
      <th>Ngày công bố</th>
      <th>Năm</th>
      <th>Tải xuống</th>
    </tr>
    <tr>
      <td>1</td>
      <td class="title">Thông báo thay đổi thời gian tổ chức Đại hội đồng cổ đông thường niên năm 2023</td>
      <td>25/05/2023</td>
      <td>2023</td>
      <td><img src="../../assets/icon download.png"></td>
    </tr>
  </table>
</template>

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

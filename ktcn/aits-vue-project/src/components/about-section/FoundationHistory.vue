<template>
  <BaseContentBox>
    <h1>Lịch sử hình thành</h1>

    <section class="timeline-area">
      <div class="timeline-content">
        <strong>2008: </strong>
        <span>
          AITS được thành lập với 3 cổ đông sáng lập gồm: Tổng Công ty Hàng không Việt Nam (TCT HKVN);
          Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT); Công ty Cổ phần Tập đoàn HiPT (HiPT).</span>
      </div>

      <div class="timeline-content">
        <strong>Từ 2009 - 2015: </strong>
        <span>
          Cung cấp các dịch vụ CNTT cho TCT HKVN theo Hợp đồng khung giữa 2 Bên. Các dịch vụ gồm:
          vận hành hệ thống phần mềm ứng dụng, hệ thống hạ tầng, dịch vụ cho thuê trang thiết bị CNTT.</span>
      </div>

      <div class="timeline-content">
        <strong>2015 - 2018: </strong>
        <span>
          Tập trung trọng tâm vào thị trường thuộc các hãng Hàng không với khách hàng lớn nhất là TCT HKVN.</span>
      </div>

      <div class="timeline-content">
        <strong>2019 - 2022: </strong>
        <span>
          Mở rộng thị trường sang các lĩnh vực khác, phát triển kinh doanh với các đơn vị liên doanh liên kết,
           vốn góp TCT HKVN như VIAGS, VAECO, SKYPEC, ... các khách hàng thuộc Cảng, Chính phủ.</span>
      </div>

      <div class="timeline-content">
        <strong>Giai đoạn 2022 - Đến nay: </strong>
        <span>
          Tiếp tục mở rộng tập khách hàng ngoài TCT HKVN với các lĩnh vực trọng điểm như Chính phủ, Ngân hàng,
           Tài chính, Bảo hiểm, Y tế, Dầu khí, Điện lực, Sản xuất, Doanh nghiệp nước ngoài, ...</span>
      </div>
    </section>

  </BaseContentBox>
</template>

<style scoped>
  h1{
    padding-top: 20px;
    font-size: 30px;
  }

  span, strong {
    color: #6b6c6f;
  }

  .timeline-area {
    padding: 0px 20px 0 30px;
    position: relative;
    padding-bottom: 30px;
  }

  .timeline-area:after{
    content: '';
    width: 4px;
    position: absolute;
    height: 200px;
    background: #ffc529;
    top: 15px;
    left: 5px;
  }

  .timeline-content{
    padding-left: 7px;
    font-size: 18px;
    line-height: 1.6;
    position: relative;
  }

  .timeline-content:before {
    content: '';
    display: block;
    width:12px;
    height:12px;
    border-radius:50%;
    background-color: #ffc529;
    position: absolute;
    top: 7px;
    left:-29px;
  }

  /* div:after {
    content: '';
    position: absolute;
    width: 3px;
    height: 200px;
    background: #ffff00;
  } */

</style>

<template>
  <BaseContentBox>
    <h1>Thành tựu</h1>

    <section class="timeline-area">
      <div class="timeline-content" style="margin-bottom: 20px;">
        <span>
          Cung cấp, vận hành khoảng 300 hệ thống hạ tầng cho khách hàng với 20 gói sản phẩm,
          dịch vụ hạ tầng đã và sẵn sàng đóng gói triển khai theo yêu cầu.</span>
      </div>

      <div class="timeline-content">
        <span>
          Hệ sinh thái sản phẩm mAITS với 15 module cung cấp cho người dùng bức tranh toàn diện về mọi mặt hoạt động sản xuất kinh doanh
          của doanh nghiệp như: tài chính, nhân lực, kế hoạch, ngân sách, hợp đồng, hoạt động sản xuất, kinh doanh, quản lý khách hàng,
          quản lý chất lượng dịch vụ, hóa đơn giúp chủ doanh nghiệp có những chiến lược phát triển phù hợp trong từng giai đoạn;</span>
      </div>

      <div class="timeline-content">
        <span>97,6% ý kiến hài lòng từ khách hàng.</span>
      </div>

      <div class="timeline-content" style="margin-top: 20px;">
        <span>Đạt tiêu chuẩn 99,9% chất lượng cung ứng sản phẩm dịch vụ vận hành khai thác.</span>
      </div>
    </section>

  </BaseContentBox>
</template>

<style scoped>
h1 {
  font-size: 30px;
  padding-top: 20px;
}

span {
  color: #6b6c6f;
}

.timeline-area {
  padding: 0 20px 0 30px;
  position: relative;
}

.timeline-area:after {
  content: '';
  width: 4px;
  position: absolute;
  height: 180px;
  background: #ffc529;
  top: 15px;
  left: 5px;
}

.timeline-content {
  padding-left: 7px;
  font-size: 18px;
  line-height: 1.6;
  position: relative;
}

.timeline-content:before {
  content: '';
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ffc529;
  position: absolute;
  top: 7px;
  left: -29px;
}

</style>

export default {
  namespaced: true,
  state () {
    return {
      membersDb: [
        {
          id: 1,
          name: 'ÔNG NGUYỄN TUẤN ANH',
          img: 'TGĐ Nguyen Tuan Anh.jpg',
          position: 'Tổng giám đốc',
          quote: 'AITS đã xác định Mục đích và Giá trị bản sắc của chúng tôi là “Công ty giải pháp công nghệ với chất lượng dịch vụ vững chắc tạo giá trị lâu dài”. Mục tiêu định hướng của Công ty là tới gần với Khách hàng , tiến tới khát vọng đưa AITS vươn xa trên thị trường quốc tế trong lĩnh vực Hàng không - Công nghệ thông tin - Xử lý dữ liệu.'
        },
        {
          id: 2,
          name: 'ÔNG BÙI TUẤN ANH',
          img: 'PTGD Bui.jpg',
          position: 'Phó Tổng Giám đốc khối Văn phòng hỗ trợ',
          quote: 'Đồng mục tiêu, chung khát vọng, xây dựng văn hoá dịch vụ CNTT gắn kết trải nghiệm khách hàng”.  Đây là Động lực hành động của Khối VHKT'
        },
        {
          id: 3,
          name: 'ÔNG ĐÀO VIỆT DŨNG',
          img: 'ptgd-dao-viet-dung.jpg',
          position: 'Phó Tổng Giám đốc khối Kinh doanh - Phát triển sản phẩm',
          quote: 'Mang trong mình sứ mệnh Cung cấp sản phẩm Dịch vụ số, Công nghệ thông tin, Viễn thông, Xử lý dữ liệu tốt nhất cho khách hàng, chúng tôi luôn đồng hành cùng khách hàng, trở thành đối tác tin cậy và phát triển bền vững. Là doanh nghiệp dẫn đầu về cung cấp các sản phẩm, dịch vụ công nghệ, chúng tôi tin rằng sự phát triển của AITS sẽ nâng cao hành trình trải nghiệm khách hàng trong lĩnh vực Công nghệ thông tin Hàng không, Du lịch và Lữ hành.'
        },
        {
          id: 4,
          name: 'ÔNG NGUYỄN GIA LỘC',
          img: 'Anh Loc.jpg',
          position: 'Phó Tổng Giám đốc khối Vận hành khai thác',
          quote: 'Việc áp dụng hệ thống công nghệ 4.0 vào xử lý dữ liệu hàng không để đảm bảo cung cấp cho khách hàng báo cáo, phân tích dữ liệu chính xác, kịp thời và đầy đủ, toàn diện trong mọi hoạt động kinh doanh vận tải hàng không; đáp ứng các tiêu chuẩn ngày càng khắt khe trong quản trị điều hành doanh nghiệp. AITS luôn khẳng định là doanh nghiệp dẫn đầu trong lĩnh vực này trên thị trường.'
        },
        {
          id: 5,
          name: 'ÔNG TRỊNH QUỐC PHONG',
          img: 'PHONG TQ.jpg',
          position: 'Kế toán trưởng',
          quote: 'AITS đã và đang số hóa, trong đó có cả lĩnh vực Tài chính kế toán, cụ thể là việc đã triển khai và đưa vào vận hành các chương trình phần mềm về Kế toán tài chính, Kế toán quản trị, Hóa đơn điện tử, Quản lý hợp đồng trong hệ thống quản trị chung của Công ty là mAITS. Với mục tiêu là cung cấp thông tin kịp thời, đúng thời điểm, hiệu quả và minh bạch nhằm hoàn thành nhiệm vụ của HĐQT và Ban giám đốc đã giao đó là Bảo toàn và phát triển vốn; tăng năng suất lao động.'
        }
      ]
    }
  },
  getters: {
    ExclusiveBoardData (state) {
      return state.membersDb
    }
  }
}

import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      vnAirlinesNews: [
        {
          vnaId: 1,
          origin: 'Tin VietNam Airlines',
          title: 'Sẵn sàng cho cao điểm hè VNA mở lại 7 đường bay nội địa',
          url: 'VnAirlinesNewsDetail',
          dateUpload: '2023-03-10',
          dateTimeUpload: '2022-03-10T17:12:44.07',
          views: 268,
          author: 'Super Admin',
          description: 'Nhằm đáp ứng nhu cầu du lịch nội địa và tạo thêm sự thuận lợi cho hành khách, VNA tiếp tục nối lại 7 đường bay gồm: 6 đường bay kết nối Phú Quốc với Đà Nẵng, Vinh, Hải Phòng, Cần Thơ, Đà Lạt, Thanh Hóa và đường bay Đà Nẵng – Vinh.',
          img: 'news1-va.jpg',
          note: 'VNA tiếp tục nối lại 7 đường bay nhằm đáp đứng nhu cầu du lịch nội địa và tạo thêm sự thuận lợi cho hành khách.',
          rest: 'Nhân dịp này, VNA triển khai ưu đãi đặc biệt với giá vé chỉ từ 64.000 đồng/chiều (tương đương 640.000 đồng/chiều đã bao gồm thuế, phí) trên các đường bay này khi hành khách mua vé sớm từ 7-21 ngày. Vé có các điều kiện kèm theo về hoàn vé, đổi vé và thời gian khởi hành. Hiện vé được bán rộng rãi trên website www.vietnamairlines.com, các phòng vé, đại lý chính thức của VNA, áp dụng từ ngày có hiệu lực bay của từng đường bay.'
        },
        {
          vnaId: 2,
          origin: 'Tin VietNam Airlines',
          title: '“Tầm nhìn chuyển đổi số” và những thách thức của VNA',
          url: 'VnAirlinesNewsDetail',
          dateUpload: '2022-01-19',
          dateTimeUpload: '2022-01-19T17:12:44.07',
          views: 1266,
          author: 'Super Admin',
          description: 'Giai đoạn 2021-2025, TCT đang tiếp tục đẩy mạnh công tác chuyển đổi số và  Đảng Ủy TCT đã ban hành Nghị quyết số 55-NQ/ĐUTCT để định hướng công tác chuyển đổi số tại TCT. Hợp tác  giữa VNA và Tập đoàn Tư vấn & Kiểm toán Toàn cầu Ernst & Young là cơ sở để TCT tổ chức Hội thảo đào tạo với chủ đề “Tầm nhìn chuyển đổi số”. ',
          img: 'news2-va.jpg',
          note: 'Sau hơn  giờ làm việc, Hội thảo đã thành công tốt đẹp. (Ảnh: Lê Hằng).',
          rest: 'Một lần nữa, Chỉ tịch Đặng Ngọc Hoà nhấn mạnh, CĐS không phải và cũng không thể là công việc, nhiệm vụ của riêng một cá nhân, một Ban hay một đơn vị nào mà sự thành công của CĐS cần những động lực, cách tiếp cận mới, tư duy trong mới trong công việc và đặc biệt là sự đồng lòng, quyết tâm của tập thể Lãnh đạo, CBNV toàn TCT. '
        },
        {
          vnaId: 3,
          origin: 'Tin VietNam Airlines',
          title: 'VNA trở thành hãng hàng không Việt đầu tiên được cấp phép bay thẳng thường lệ đến Mỹ',
          url: 'VnAirlinesNewsDetail',
          dateUpload: '2021-11-19',
          dateTimeUpload: '2021-11-19T17:12:44.07',
          views: 182,
          author: 'Super Admin',
          description: 'VNA đã chính thức đón nhận chứng chỉ cấp phép khai thác thường lệ các chuyến bay thẳng thương mại không điểm dừng giữa Việt Nam và Mỹ. Với sự kiện này, VNA đã trở thành hãng hàng không đầu tiên và duy nhất của Việt Nam được cấp phép bay thẳng thường lệ đến Mỹ.',
          img: 'news3-va.jpg',
          note: 'Tham tán thương mại Charles Ranado thay mặt nhà chức trách Mỹ trao chứng chỉ cấp phép bay thẳng thường lệ cho VNA.',
          rest: 'Chứng chỉ của FAA có hiệu lực không giới hạn về thời gian và cho phép VNA chủ động xây dựng tần suất, triển khai kế hoạch khai thác theo nhu cầu của hãng. Đây là điểm khác biệt quan trọng so với giấy phép mà Mỹ đã từng cấp cho các hãng hàng không Việt Nam trước đó để bay đến Mỹ dưới hình thức thuê chuyến kèm theo các điều kiện hạn chế về số lượng chuyến bay, thời gian và tần suất khai thác.'
        },
        {
          vnaId: 4,
          origin: 'Tin VietNam Airlines',
          title: 'Ban hành Quy định 19 điều Đảng viên không được làm',
          url: 'VnAirlinesNewsDetail',
          dateUpload: '2021-11-02',
          dateTimeUpload: '2021-11-02T17:12:44.07',
          views: 63,
          author: 'Super Admin',
          description: '',
          img: 'news4-va.png',
          note: 'Ban hành Quy định 19 điều Đảng viên không được làm',
          rest: ''
        },
        {
          vnaId: 5,
          origin: 'Tin VietNam Airlines',
          title: 'Chuyến bay đầu tiên từ Việt Nam đi châu Âu thử nghiệm thành công hộ chiếu sức khỏe điện tử',
          url: 'VnAirlinesNewsDetail',
          dateUpload: '2021-09-02',
          dateTimeUpload: '2021-09-02T17:12:44.07',
          views: 170,
          author: 'Super Admin',
          description: 'Đây là chuyến bay đầu tiên từ Việt Nam đi châu Âu thử nghiệm ứng dụng hộ chiếu sức khỏe điện tử, với 18 hành khách tham gia thử nghiệm. Chuyến bay là sự tiếp nối thành công của chuyến bay thử nghiệm trước đó, cũng do VNA khai thác với số hiệu VN310 từ Hà Nội đi Tokyo (Nhật Bản) hôm 12/8. Các chuyến bay thử nghiệm đạt kết quả tốt tiếp tục mở ra những kỳ vọng tích cực về khôi phục đường bay quốc tế.',
          img: 'news5-va.jpg',
          note: 'Đây là chuyến bay đầu tiên từ Việt Nam đi châu Âu thử nghiệm ứng dụng hộ chiếu sức khỏe điện tử. (Ảnh: VNA).',
          rest: 'Ứng dụng hộ chiếu sức khỏe điện tử tích hợp các giải pháp số hàng đầu như du lịch không tiếp xúc, dữ liệu sinh trắc học và chứng nhận sức khỏe điện tử với kết quả xét nghiệm Covid-19, tiêm chủng Covid-19. Đây là ứng dụng an toàn, đảm bảo thông tin nhất quán giữa Chính phủ, cơ sở xét nghiệm, hãng hàng không và hành khách, qua đó giúp việc di chuyển giữa các quốc gia an toàn và dễ dàng hơn trong bối cảnh đại dịch.'
        },
        {
          vnaId: 6,
          origin: 'Tin VietNam Airlines',
          title: 'VNA vận chuyển gần 1 triệu liều vắc xin do Nhật Bản hỗ trợ vào Tp HCM',
          url: 'VnAirlinesNewsDetail',
          dateUpload: '2021-06-17',
          dateTimeUpload: '2021-06-17T17:12:44.07',
          views: 763,
          author: 'Super Admin',
          description: 'Gần 1 triệu liều vắc xin sẽ là nguồn lực quan trọng góp phần giúp Tp Hồ Chí Minh đẩy lùi đại dịch Covid-19. Số lượng bệnh nhân Covid-19 tại thành phố vẫn tiếp tục tăng trong những ngày qua. Tiêm chủng là giải pháp được kỳ vọng đặc biệt, với hiệu quả ngăn ngừa lây nhiễm hoặc giảm nhẹ triệu chứng đã được chứng minh.',
          img: 'news6-va.jpg',
          note: 'Gần 1 triệu liều vắc xin Covid-19 đã hỏa tốc từ Hà Nội đến Tp Hồ Chí Minh. VNA vận chuyển miễn toàn bộ cước phí.',
          rest: 'Gần 1 triệu liều vắc xin sẽ là nguồn lực quan trọng góp phần giúp Tp Hồ Chí Minh đẩy lùi đại dịch Covid-19. Số lượng bệnh nhân Covid-19 tại thành phố vẫn tiếp tục tăng trong những ngày qua. Tiêm chủng là giải pháp được kỳ vọng đặc biệt, với hiệu quả ngăn ngừa lây nhiễm hoặc giảm nhẹ triệu chứng đã được chứng minh.'
        }
      ],
      vnAirlinesNewsDb: []
    }
  },
  mutations: {
    refreshedData (state) {
      axios.get('http://localhost:9513/api/vnAirlinesNews').then((response) => {
        state.vnAirlinesNewsDb = response.data
      })
    }
  },
  getters: {
    vnAirlinesNewsData (state) {
      return state.vnAirlinesNews
    },
    vnAirlinesNewsDbData (state) {
      return state.vnAirlinesNewsDb
    }
  }
}

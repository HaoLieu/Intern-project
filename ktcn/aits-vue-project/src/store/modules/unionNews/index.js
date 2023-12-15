import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      unionNews: [
        {
          unionId: 1,
          origin: 'Tin Đảng - Đoàn',
          title: 'Người Việt tin dùng hàng Việt: Động lực thúc đẩy phát triển kinh tế',
          url: 'UnionNewsDetail',
          dateUpload: '2022-09-07',
          dateTimeUpload: '2022-09-07T09:43:52.74',
          views: 130,
          author: 'Super Admin',
          description: 'Nghiên cứu gần đây của Nielsen cho biết có 76% người tiêu dùng Việt Nam chuộng hàng nội địa, đặc biệt là những sản phẩm có thương hiệu, bảo đảm chất lượng và tốt cho sức khỏe.',
          img: 'news1-dd.jpg',
          note: 'Cà phê Việt thơm ngon, mẫu mã đa dạng không chỉ chinh phục khách Việt mà còn thu hút khách quốc tế - Ảnh: T.T.D',
          rest: '"Mua để ủng hộ hàng Việt thì chỉ vài ba bữa đầu, chứ không ai mua ủng hộ cả đời được. Nhà mình xài hàng Việt bao năm nay không thể nói mua vì ủng hộ mà vì hàng chất lượng, đẹp mắt, giá cũng phù hợp nữa". Chị Trần Thu Sương (41 tuổi, nhân viên kinh doanh, TP.HCM)'
        },
        {
          unionId: 2,
          origin: 'Tin Đảng - Đoàn',
          title: 'Cục Hàng không đề xuất mở lại đường bay nội địa',
          url: 'UnionNewsDetail',
          dateUpload: '2021-09-13',
          dateTimeUpload: '2021-09-13T09:43:52.743',
          views: 244,
          author: 'Super Admin',
          description: 'Ngày 13/9, đại diện Cục Hàng không Việt Nam cho biết, cơ quan này đã báo cáo Bộ Giao thông Vận tải về kế hoạch phục hồi vận tải hàng không nội địa. Theo đó, các đường bay sẽ được khai thác với tần suất phù hợp với 3 giai đoạn',
          img: 'news2-dd.jpg',
          note: 'Máy bay đỗ tại sân bay Tân Sơn Nhất. Ảnh: Quỳnh Trần',
          rest: 'Giai đoạn một, áp dụng thí điểm 2 tuần, cho phép hành khách công vụ, lực lượng phòng chống dịch Covid-19; hành khách có văn bản đồng ý di chuyển/tiếp nhận của các địa phương đi và đến; khách có giấy chứng nhận hoàn thành cách ly; hoặc có chứng nhận tiêm đủ liều vaccine phòng Covid-19; có giấy xác nhận khỏi bệnh Covid-19 không quá 12 tháng tính đến thời điểm xuất phát.'
        },
        {
          unionId: 3,
          origin: 'Tin Đảng - Đoàn',
          title: 'Hà Nội tiếp tục giãn cách xã hội tại vùng có dịch, sau ngày 6/9',
          url: 'UnionNewsDetail',
          dateUpload: '2021-09-02',
          dateTimeUpload: '2021-09-02T09:43:52.743',
          views: 238,
          author: 'Super Admin',
          description: 'Sau đợt giãn cách thứ ba, Hà Nội tiếp tục giãn cách ở "vùng đỏ" và điều chỉnh các biện pháp cao hơn nguyên tắc Chỉ thị 15 với vùng “cam, xanh”. Đây là một trong những nội dung thông báo kết luận của Ban Thường vụ Thành ủy về tăng cường công tác phòng, chống Covid-19, ban hành ngày 1/9.',
          img: 'news3-dd.jpg',
          note: 'Khu vực Hồ Gươm vắng vẻ trong những ngày Hà Nội giãn cách xã hội theo Chỉ thị 16, sáng 2/9. Ảnh: Ngọc Thành',
          rest: 'Trên cơ sở phân vùng, "vùng đỏ" có nguy cơ rất cao sẽ tiếp tục thực hiện giãn cách xã hội ở mức cao hơn Chỉ thị 16 với nguyên tắc "ai đâu ở đó", dập dịch triệt để.Tại các khu vực nguy cơ cao "vùng cam" và nguy cơ thấp hơn là "vùng xanh", thành phố điều chỉnh biện pháp ở mức cao hơn nguyên tắc Chỉ thị 15 để tổ chức phục hồi sản xuất, kinh doanh và hỗ trợ "vùng đỏ".'
        },
        {
          unionId: 4,
          origin: 'Tin Đảng - Đoàn',
          title: 'Tin tặc tại Việt Nam đang gia tăng',
          url: 'UnionNewsDetail',
          dateUpload: '2021-05-28',
          dateTimeUpload: '2021-05-28T09:43:52.747',
          views: 501,
          author: 'Super Admin',
          description: 'Tình hình an ninh mạng đã có những thay đổi mạnh mẽ trong thời gian gần đây nhất là trong bối cảnh dịch Covid-19 và xu hướng làm việc từ xa. Điều này thể hiện qua các cuộc tấn công quy mô lớn và ngày càng phức tạp. Tin tặc thực hiện trung bình 50 triệu cuộc tấn công mật khẩu mỗi ngày, 579 cuộc tấn công mỗi giây.',
          img: 'news4-dd.jpg',
          note: 'Ảnh minh họa',
          rest: 'TẤN CÔNG MALWARE VÀ RAMSOMWARE BÙNG PHÁT! Kết quả đo từ xa của Microsoft vừa công bố cuối tuần qua cho thấy, tỷ lệ nhiễm phần mềm độc hại malware và mã độc ransomware ở Châu Á- Thái Bình Dương đang gia tăng trong 18 tháng qua, kéo dài từ trước đại dịch Covid-19 bùng phát đến nay.'
        },
        {
          unionId: 5,
          origin: 'Tin Đảng - Đoàn',
          title: 'Việt Nam mua 31 triệu liều vaccine Pfizer',
          url: 'UnionNewsDetail',
          dateUpload: '2021-05-18',
          dateTimeUpload: '2021-05-18T09:43:52.747',
          views: 383,
          author: 'Super Admin',
          description: 'Chiều 18/5, ông Trương Quốc Cường, Thứ trưởng Y tế, nói với VnExpress "Bộ Y tế đã ký hợp đồng với Công ty Pfizer mua 31 triệu liều vaccine. Hãng dược này cam kết bán vaccine cho Việt Nam với giá thấp nhất, dành cho các nước có thu nhập thấp". Tuy nhiên, lãnh đạo Bộ Y tế chưa thông tin về giá bán cụ thể.',
          img: 'news5-dd.jpg',
          note: 'Một lọ vaccine Pfizer ở Đức hồi tháng một. Ảnh: Reuters',
          rest: 'rước đó chiều 17/5, tại cuộc họp Thường trực Chính phủ về việc mua vaccine phòng Covid-19 của Công ty Pfizer, Thủ tướng Phạm Minh Chính nêu rõ việc mua vaccine là cần thiết, cấp bách theo đúng kết luận của Bộ Chính trị, Ban Bí thư và nghị quyết của Chính phủ'
        },
        {
          unionId: 6,
          origin: 'Tin Đảng - Đoàn',
          title: 'Nguyên tắc bầu cử đại biểu Quốc hội, đại biểu HĐND',
          url: 'UnionNewsDetail',
          dateUpload: '2021-05-18',
          dateTimeUpload: '2021-05-18T09:43:52.747',
          views: 332,
          author: 'Super Admin',
          description: 'Nghiên cứu gần đây của Nielsen cho biết có 76% người tiêu dùng Việt Nam chuộng hàng nội địa, đặc biệt là những sản phẩm có thương hiệu, bảo đảm chất lượng và tốt cho sức khỏe.',
          img: 'news6-dd.jpg',
          note: 'Cà phê Việt thơm ngon, mẫu mã đa dạng không chỉ chinh phục khách Việt mà còn thu hút khách quốc tế - Ảnh: T.T.D',
          rest: '"Mua để ủng hộ hàng Việt thì chỉ vài ba bữa đầu, chứ không ai mua ủng hộ cả đời được. Nhà mình xài hàng Việt bao năm nay không thể nói mua vì ủng hộ mà vì hàng chất lượng, đẹp mắt, giá cũng phù hợp nữa". Chị'
        }
      ],
      unionNewsDb: []
    }
  },
  mutations: {
    refreshedData (state) {
      axios.get('http://localhost:9513/api/UnionNews').then((response) => {
        state.unionNewsDb = response.data
      })
    }
  },
  getters: {
    UnionNewsData (state) {
      return state.unionNews
    },
    UnionNewsDbData (state) {
      return state.unionNewsDb
    }
  }
}

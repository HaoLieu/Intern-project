import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      sportCultureNews: [
        {
          scId: 1,
          origin: 'Tin AITS',
          title: 'THỂ DỤC THỂ THAO - NÂNG CAO SỨC KHỎE VÀ GẮN KẾT TÌNH THÂN',
          url: 'SpCulNewsDetail',
          dateUpload: '2023-12-13',
          dateTimeUpload: '2023-12-13T16:16:32.99',
          sport: 'true',
          views: 160,
          author: 'Super Admin',
          description: 'Lãnh đạo phdòng KD CNTTMN xác định khi đời sống vật chất bảo đảm, đời sống tinh thần được quan tâm đúng mức thì người lao động mới yên tâm gắn bó lâu dài và tích cực tham gia lao động sản xuất, góp phần phát triển sản xuất kinh doanh hiệu quả cho doanh nghiệp. Đồng thời, Lãnh đạo phòng cũng muốn nơi làm việc mà còn là “ngôi nhà thứ hai” để mọi người có thể thoải mái chia sẻ không chỉ trong công việc mà còn cả trong cuộc sống hàng ngày và thêm gắn bó với Công ty.',
          img: 'img-sc1.png',
          note: 'Hai bóng hồng hiếm hoi của phòng KDCNTT MN tham gia cổ vũ ',
          rest: 'Các hoạt động thể dục - thể thao được tổ chức thường xuyên đã tạo nên sự đoàn kết và gắn kết giữa các bộ phận, cá nhân trong Công ty với nhau. Đây cũng chính là sợi dây kết nối, giúp cán bộ nhân viên thêm gắn bó với Công ty. Ngoài ra, chi nhánh còn tổ chức nhiều hoạt động khác như liên hoan văn nghệ, giao lưu đồng nghiệp để tăng thêm sự đoàn kết, gắn kết trong nội bộ. Từ đó, tạo ra nội lực lớn lao để thúc đẩy sự phát triển Công ty.'
        },
        {
          scId: 2,
          origin: 'Tin AITS',
          title: 'Ở ĐÂU CÓ TRÁI BÓNG, Ở ĐÓ CÓ ANH',
          url: 'SpCulNewsDetail',
          dateUpload: '2023-12-13',
          dateTimeUpload: '2023-12-13T16:16:33',
          sport: 'true',
          views: 155,
          author: 'Super Admin',
          description: 'Cầu thủ Hoàng Đức Hải - Đội trưởng Đội bóng đá Công ty Cổ phần Tin học Viễn thông (AITS) đã đam mê với trái bóng từ những điều rất đỗi “tuổi thơ” đó là bộ truyện tranh “cơn bão một thời” chắc không xa lạ gì với những thanh niên 8X thuở đó: “Subasa - Vua bóng đá”',
          img: 'img-sc2.png',
          note: 'Hoàng Đức Hải (số 8) cầm cờ lưu niệm giao lưu với Ban Lãnh đạo AITS tại Giải bóng đá AITS OPEN 2022 vừa qua.',
          rest: 'Hiện đang công tác tại phòng Kế hoạch Đầu tư với công việc luôn bận rộn, song anh luôn cố gắng hoàn thành tốt nhiệm vụ được giao đúng với tinh thần của cầu thủ chuyên nghiệp: hết mình và trách nhiệm. Anh chia sẻ “Bóng đá không chỉ là sở thích mà anh còn muốn đem nhiệt huyết với bóng đá truyền cảm hứng trong lao động”, dù là ở vị trí nào anh cũng luôn là tấm gương về sự chăm chỉ, lòng nhiệt thành cho đàn em noi theo. '
        },
        {
          scId: 3,
          origin: 'Tin AITS',
          title: 'Đào tạo nội bộ: Củng cố lực lượng - Nâng tầm chất lượng',
          url: 'SpCulNewsDetail',
          dateUpload: '2023-12-13',
          dateTimeUpload: '2023-12-13T16:16:33',
          sport: 'true',
          views: 160,
          author: 'Super Admin',
          description: 'Trong thời gian qua, CNMN tiếp nhận nhân sự gồm: Sinh viên thực tập, Lao động Học việc, Cộng tác viên..., nhằm tìm kiếm nguồn nhân sự chất lượng, đảm bảo các hoạt động được thông suốt. Chính vì vậy, công tác đào tạo nhân sự mới luôn là vấn đề được các Lãnh đạo đơn vị quan tâm sát sao. Xác định được điều đó, CNMN đã có những buổi đào tạo chuyên môn, nghiệp vụ nội bộ cho cả những nhân sự mới và hiện tại để hướng dẫn những quy định - quy trình công việc.',
          img: 'img-sc3.png',
          note: 'Buổi đào tạo trực tuyến với nhân sự mới phòng KDCNTT MN',
          rest: '“Làm việc có tâm, ắt sẽ có tầm” đã trở thành phương châm làm việc của CNMN. Câu nói đã có sức ảnh hưởng lớn và tác động về Tầm nhìn và Nhận thức đối với mỗi cá nhân,; nhắc nhau cùng cố gắng, nỗ lực học hỏi, nâng cao giá trị bản thân, gắn bó với chi nhánh;coi sự phát triển của công ty cũng là sự phát triển của bản thân mình.'
        },
        {
          scId: 4,
          origin: 'Tin AITS',
          title: 'NHỮNG NỖI NIỀM TÂM SỰ CHIA XA AITS',
          url: 'SpCulNewsDetail',
          dateUpload: '2023-12-13',
          dateTimeUpload: '2023-12-13T16:16:33',
          sport: 'true',
          views: 162,
          author: 'Super Admin',
          description: 'Vẫn biết rằng: “Cuộc đời là những chuyến đi.Gặp nhau rồi lại chia ly là thường” Vậy mà đến giờ phút phải nói lời chia tay, tất cả lại bùi ngùi xúc động.',
          img: 'img-sc4.jpg',
          note: 'Chị Dinh trong ngày chính thức tạm biệt công việc với đồng nghiệp, các em, cháu của Phòng TCKT. ',
          rest: 'Chị Dinh chia sẻ:“ Chị mong dịch bệnh sớm được kiểm soát, cuộc sống trở về quỹ đạo thường nhật, mọi người đỡ gánh lo toan cơm áo gạo tiền. Chị chúc Ban lãnh đạo Công ty cũng như toàn thể CBNV AITS nhiều sức khỏe, luôn giữ vững tay chèo để đưa con thuyền AITS ngày càng vươn xa, đạt được những thành công rực rỡ trong tương lai.”'
        },
        {
          scId: 5,
          origin: 'Tin AITS',
          title: 'Nâng cao sức khỏe, đẩy lùi COVID',
          url: 'SpCulNewsDetail',
          dateUpload: '2023-12-13',
          dateTimeUpload: '2023-12-13T16:16:33',
          sport: 'true',
          views: 165,
          author: 'Super Admin',
          description: 'Tháng 10/2021, Lãnh đạo phòng đã quyết định thành lập đội bóng với tên gọi là FC DVPM dưới sự dẫn dắt của ông bầu Đỗ Vũ Hoàng. Sự ra đời của đội bóng đã nhận được sự hưởng ứng nhiệt tình của tất cả thành viên với quân số đội bóng hơn 20 thành viên gồm cả những gương mặt mới gia nhập AITS.',
          img: 'img-sc5.jpg',
          note: 'FC DVPM với những gương mặt trẻ và mới gia nhập AITS. ',
          rest: 'Trong thời gian tới, khi dịch bệnh được kiểm soát, phong trào văn hóa - thể thao tại AITS sẽ tiếp tục thêm với CLB Cầu lông, CLB Yoga,…để mỗi CBNV sau giờ làm việc được giao lưu gắn kết góp phần tăng cường sức khoẻ, xây dựng con người phát triển toàn diện về cả thể chất lẫn tinh thần.'
        },
        {
          scId: 6,
          origin: 'Tin AITS',
          title: 'Nào cùng 3 tại chỗ',
          url: 'SpCulNewsDetail',
          dateUpload: '2023-12-13',
          dateTimeUpload: '2023-12-13T16:16:33.003',
          sport: 'true',
          views: 160,
          author: 'Super Admin',
          description: '',
          img: 'img-sc6.png',
          note: '',
          rest: ''
        }
      ],
      sportCultureNewsDb: []
    }
  },
  mutations: {
    refreshedData (state) {
      axios.get('http://localhost:9513/api/sportculturenews').then((response) => {
        state.sportCultureNewsDb = response.data
      })
    }
  },
  getters: {
    sportCultureNewsData (state) {
      return state.sportCultureNews
    },
    sportCultureNewsDbData (state) {
      return state.sportCultureNewsDb
    }
  }
}

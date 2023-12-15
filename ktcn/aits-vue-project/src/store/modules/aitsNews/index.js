import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      aitsNews: [
        {
          aitsId: 1,
          origin: 'Tin AITS',
          title: 'HỘI NGHỊ ĐẠI BIỂU NGƯỜI LAO ĐỘNG AITS 2023',
          url: 'AitsNewsDetail',
          dateUpload: '2023-07-12',
          dateTimeUpload: '2023-07-12T11:52:26.91',
          views: 350,
          author: 'Super Admin',
          description: 'Ngày 28 tháng 06 năm 2023 tại Hà Nội, Công ty Cổ phần Tin học - Hàng không (AITS) đã tổ chức Hội nghị đại biểu Người lao động năm 2023. Hội nghị có sự tham dự của 77 Đại biểu đại diện cho hơn 300 người lao động Công ti.Hội nghị cũng đã vinh dự được đón tiếp ông Đào Mạnh Kiên - Uỷ viên BCH Tổng liên đoàn LĐVN, Uỷ viên BCH Đảng bộ TCT, Chủ tịch CĐ TCT và ông Lê Hoàng Chính - Trưởng Ban kiểm soát công ty.',
          img: 'news1-aits.jpg',
          note: 'Hội nghị Đại biểu Người lao động AITS năm 2023 với sự tham dự của 77 Đại biểu',
          rest: 'Hội nghị đã được nghe trình bày các báo cáo quan trọng gồm:Báo cáo của Người sử dụng lao động về tình hình hoạt động SXKD năm 2022 và kế hoạch hoạt động SXKD năm 2023 do Phó Tổng Giám đốc Bùi Tuấn Anh, đại diện Ban Lãnh đạo Công ty trình bày. Trong đó, nhấn mạnh mục tiêu hướng tới của công ty nằm trong top 30 doanh nghiệp công nghệ được nhân viên hài lòng nhất tại Việt Nam với phương châm “Chất lượng dịch vụ là danh dự của AITS'
        },
        {
          aitsId: 2,
          origin: 'Tin AITS',
          title: 'AITS TỔ CHỨC THÀNH CÔNG ĐẠI HỘI ĐỒNG CỔ ĐÔNG THƯỜNG NIÊN 2023',
          url: 'AitsNewsDetail',
          dateUpload: '2023-06-24',
          dateTimeUpload: '2023-06-24T17:12:15.76',
          views: 634,
          author: 'Super Admin',
          description: 'Ngày 21/06/2023 vừa qua, tại Hà Nội, Công ty Cổ phần Tin học Viễn thông Hàng không (AITS) đã tổ chức Đại hội đồng Cổ đông (ĐHĐCĐ) thường niên 2023. Mở đầu đại hội, ông Nguyễn Công Hoàn - Trưởng Ban kiểm tra tư cách cổ đông đã báo cáo về công tác kiểm tra tư cách cổ đông với số lượng tham gia đạt đủ quyền biểu quyết chiếm 99,53%.',
          img: 'news2-aits.jpg',
          note: 'Hội đồng quản trị - Ban Kiểm soát - Ban Điều hành mừng thành công Đại hội',
          rest: 'Để hoàn thành kế hoạch SXKD 2023, Công ty vẫn tiếp tục kiên trì triển khai 04 nhóm giải pháp gồm: Đẩy mạnh công tác bán - Phát triển sản phẩm dịch vụ hệ sinh thái m.AITS - Tập trung phát triển nguồn lực và Nâng cao quản trị tài chính, cũng như phấn đấu hoàn thành chỉ tiêu Kế hoạch - Lợi nhuận do ĐHĐCĐ giao.'
        },
        {
          aitsId: 3,
          origin: 'Tin AITS',
          title: 'GIỚI THIỆU CÔNG NGHỆ DOCKER',
          url: 'AitsNewsDetail',
          dateUpload: '2023-06-07',
          dateTimeUpload: '2023-06-07T17:12:15.76',
          views: 251,
          author: 'Super Admin',
          description: 'Công nghệ Docker đã trở thành một phần quan trọng trong cơ sở hạ tầng công nghệ thông tin của nhiều công ty và với AITS cũng không phải là ngoại lệ. Với khả năng tạo ra môi trường ứng dụng độc lập và linh hoạt, Docker đã được AITS để ý đến trong quá trình phát triển, triển khai và vận hành ứng dụng phần mềm.',
          img: 'news3-aits.jpg',
          note: 'Triển khai kiểm thử tự động (Ảnh: Netsolutions)',
          rest: 'Với sự kết hợp giữa Docker và các công cụ quản lý ứng dụng và hạ tầng hiện đại khác, AITS đã tạo ra một môi trường phát triển và triển khai ứng dụng hiệu quả và tiên tiến. Công nghệ Docker không chỉ mang lại tính nhất quán và di động cho ứng dụng mà còn giúp tăng cường khả năng mở rộng và tăng cường hiệu suất. Với việc sử dụng Docker, AITS đang tiến xa hơn trong việc cung cấp các giải pháp phần mềm chất lượng và đáng tin cậy cho khách hàng của mình.'
        },
        {
          aitsId: 4,
          origin: 'Tin AITS',
          title: '“DÂN VẬN KHÉO” TRONG HOẠT ĐỘNG CỦA CÔNG TY CỔ PHẦN TIN HỌC VIỄN THÔNG HÀNG KHÔNG',
          url: 'AitsNewsDetail',
          dateUpload: '2023-06-06',
          dateTimeUpload: '2023-06-06T17:12:15.76',
          views: 247,
          author: 'Super Admin',
          description: 'Trong giai đoạn hiện nay, nội dung, phương thức công tác dân vận của Đảng đã có những thay đổi, song tư tưởng của Chủ tịch Hồ Chí Minh về công tác dân vận vẫn luôn còn nguyên ý nghĩa. Những năm qua, công tác dân vận của Công ty CP Tin học - Viễn thông Hàng không (AITS) được thực hiện thông qua vai trò, trách nhiệm của mỗi cấp ủy đảng, mỗi cán bộ, đảng viên và được tiến hành thường xuyên trong mọi phòng ban, đơn vị.',
          img: 'news4-aits.jpg',
          note: '“Khéo” trong hợp tác phát triển SXKD',
          rest: 'Việc đẩy mạnh công tác dân vận trong thời gian qua đã từng bước nâng cao nhận thức về công tác dân vận cho cán bộ, đảng viên và người lao động trong toàn Công ty. Đặc biệt là nâng cao nhận thức, tinh thần trách nhiệm, tính tiền phong gương mẫu, vai trò nêu gương của đội ngũ cấp ủy viên và đảng viên, nhất là người đứng đầu cấp ủy đơn vị đối với công tác dân vận làm cho “dân hiểu, dân tin, dân ủng hộ”.'
        },
        {
          aitsId: 5,
          origin: 'Tin AITS',
          title: 'ĐÁNH GIÁ CHUYÊN ĐỀ - HOẠT ĐỘNG THIẾT THỰC ĐỒNG HÀNH CÙNG ĐƠN VỊ CHUYÊN MÔN',
          url: 'AitsNewsDetail',
          dateUpload: '2023-06-02',
          dateTimeUpload: '2023-06-02T17:12:15.76',
          views: 260,
          author: 'Super Admin',
          description: 'Để nâng cao chất lượng hơn nữa công tác Đào tạo, việc khảo sát, đánh giá sau Đào tạo mang ý nghĩa vô cùng quan trọng. Nhận thức được việc này, từ ngày 17/5 đến ngày 26/5 Phòng Đảm bảo chất lượng phối hợp với bộ phận Tuyển dụng - Đào tạo Phòng Tổ chức Hành chính đã thực hiện phối hợp đánh giá chuyên đề bao gồm các nội dung liên quan tổ chức, quy trình, nguồn lực, thực thi và đánh giá hiệu quả sau đào tạo.',
          img: 'news5-aits.jpg',
          note: 'Không khí buổi khảo sát tại trụ sở Hà Nội và chi nhánh Hồ Chí Minh',
          rest: 'Ông Đào Việt Dũng - PTGĐ Khối Kinh doanh - Phát triển sản phẩm chia sẻ: “Tôi cho rằng việc đánh giá chuyên đề lần này là bước tiến sát sao hơn nữa trong công tác giám sát, đảm bảo chất lượng của công ty và cần áp dụng sâu rộng trong thời gian sắp tới. Việc đánh giá chuyên đề theo các điểm nhìn nhận cần cải thiện và đánh giá sau đào tạo đem lại rất nhiều ý nghĩa.'
        },
        {
          aitsId: 6,
          origin: 'Tin AITS',
          title: 'GƯƠNG SÁNG NỮ CÔNG ĐOÀN VIÊN TIÊU BIỂU',
          url: 'AitsNewsDetail',
          dateUpload: '2023-06-01',
          dateTimeUpload: '2023-06-01T17:12:15.76',
          views: 272,
          author: 'Super Admin',
          description: 'Hơn 30 năm gắn bó với ngành Hàng không ở lĩnh vực Xử lý dữ liệu và là nguyên Trưởng ban nữ công Công đoàn cơ sở AITS nhiệm kỳ 2017 - 2022, chị Ninh Thị Hồng Thúy đã luôn hoàn thành tốt vai trò là một nữ cán bộ Công đoàn điển hình, tiên phong trong các phong trào của Công đoàn nói chung và công tác nữ công nói riêng.',
          img: 'news6-aits.jpg',
          note: 'Chị Thúy nhận bằng khen từ đại diện Tổng liên đoàn lao động Việt Nam và Công đoàn TCT HKVN',
          rest: 'Tại lễ tổng kết Tháng công nhân năm 2023 và vinh danh Cán bộ Công đoàn, đoàn viên, Người lao động tiêu biểu giai đoạn 2018-2023 vừa qua, chị Thúy đã được nhận bằng khen từ đại diện Tổng liên đoàn lao động Việt Nam và Công đoàn TCT HKVN. Trong buổi lễ, chị Thúy xúc động gửi lời cảm ơn Ban điều hành, Ban lãnh đạo Công ty, các đồng nghiệp tại AITS luôn quan tâm, yêu quý chị.'
        }
      ],
      aitsNewsDb: []
    }
  },
  mutations: {
    refreshedData (state) {
      axios.get('http://localhost:9513/api/aitsNews').then((response) => {
        state.aitsNewsDb = response.data
      })
    }
  },
  getters: {
    aitsNewsData (state) {
      return state.aitsNews
    },
    aitsNewsDbData (state) {
      return state.aitsNewsDb
    }
  }
}

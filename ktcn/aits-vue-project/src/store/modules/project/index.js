export default {
  namespaced: true,
  state () {
    return {
      projects: [
        {
          id: 1,
          title: 'DỰ ÁN',
          img: 'vna.jpg',
          content: 'Dịch vụ thiết lập và ĐBHĐ phần cứng cho Hệ thống Quản lý Khách hàng thường xuyên của TCT HKVN'
        },
        {
          id: 2,
          title: 'DỰ ÁN',
          img: 'Viags.jpg',
          content: 'Tư vấn chương trình quản trị Sản xuất kinh doanh - Công ty TNHH MTV Dịch vu Mặt đất sân bay Việt Nam (VIAGS)'
        },
        {
          id: 3,
          title: 'DỰ ÁN',
          img: 'NCTS.jpg',
          content: 'Dịch vụ Cho thuê và ĐBHĐ phần mềm Quản trị thông tin doanh nghiệp (MIS) - Công ty Cổ phần Hàng hóa Nội Bài (NCTS).'
        },
        {
          id: 4,
          title: 'DỰ ÁN',
          img: 'vna.jpg',
          content: 'Dịch vụ thiết lập và ĐBHĐ phần cứng cho Hệ thống Quản lý Khách hàng thường xuyên của TCT HKVN'
        },
        {
          id: 5,
          title: 'DỰ ÁN',
          img: 'Viags.jpg',
          content: 'Tư vấn chương trình quản trị Sản xuất kinh doanh - Công ty TNHH MTV Dịch vu Mặt đất sân bay Việt Nam (VIAGS)'
        },
        {
          id: 6,
          title: 'DỰ ÁN',
          img: 'NCTS.jpg',
          content: 'Dịch vụ Cho thuê và ĐBHĐ phần mềm Quản trị thông tin doanh nghiệp (MIS) - Công ty Cổ phần Hàng hóa Nội Bài (NCTS).'
        }
      ]
    }
  },
  getters: {
    projectData (state) {
      return state.projects
    }
  }
}

export default {
  namespaced: true,
  state () {
    return {
      abnormalDocs: [
        {
          id: 1,
          title: 'Thông báo thời gian tổ chức ĐHĐCĐ bất thường năm 2023',
          dateUpload: '02/10/2023',
          year: '2023'
        },
        {
          id: 2,
          title: 'Mẫu giấy ủy quyền tham dự ĐHĐCĐ bất thường năm 2023',
          dateUpload: '02/10/2023',
          year: '2023'
        },
        {
          id: 3,
          title: 'Thư mời họp ĐHĐCĐ bất thường năm 2023',
          dateUpload: '02/10/2023',
          year: '2023'
        },
        {
          id: 4,
          title: 'Các nội dung tại ĐHĐCĐ bất thường năm 2023',
          dateUpload: '02/10/2023',
          year: '2023'
        },
        {
          id: 5,
          title: 'Thông báo đề cử, ứng cử bầu bổ sung thành viên HĐQT',
          dateUpload: '02/10/2023',
          year: '2023'
        }
      ],
      annualDocs: [
        {
          id: 1,
          title: 'Thư mời Họp Đại hội đồng cổ đông thường niên năm 2023',
          dateUpload: '26/04/2023',
          year: '2023'
        },
        {
          id: 2,
          title: 'Quy chế Đại hội đồng cổ đông thường niên 2023',
          dateUpload: '26/04/2023',
          year: '2023'
        },
        {
          id: 3,
          title: 'Chương trình Họp Đại hội đồng cổ đông thường niên năm 2023',
          dateUpload: '26/04/2023',
          year: '2023'
        },
        {
          id: 4,
          title: 'Tờ trình thông qua các nội dung tại Đại hội đồng cổ đông thường niên 2023',
          dateUpload: '26/04/2023',
          year: '2023'
        },
        {
          id: 5,
          title: 'Báo cáo của Hội đồng quản trị',
          dateUpload: '26/04/2023',
          year: '2023'
        },
        {
          id: 6,
          title: 'Báo cáo của Ban Kiểm soát công ty',
          dateUpload: '26/04/2023',
          year: '2023'
        }
      ]
    }
  },
  getters: {
    abnormalDocsData (state) {
      return state.abnormalDocs
    },
    annualDocsData (state) {
      return state.annualDocs
    }
  }
}

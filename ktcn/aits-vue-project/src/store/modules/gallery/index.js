import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      galleries: [
        {
          id: 1,
          name: 'CHÀO MỪNG 14 NĂM THÀNH AITS - VỮNG BƯỚC VƯƠN XA',
          img: 'img-gallery1.jpg',
          quantity: 21
        },
        {
          id: 2,
          name: 'AITS : Ký ức vui vẻ 2022 và Đồng hành kiến tạo trong tương lai',
          img: 'img-gallery2.jpg',
          quantity: 1
        },
        {
          id: 3,
          name: 'Hội nghị đại biểu Người lao động AITS 2022: Đoàn kết- Sáng tạo - Phát triển',
          img: 'img-gallery3.jpg',
          quantity: 1
        },
        {
          id: 4,
          name: 'Hội nghị đại biểu Người lao động 2022',
          img: 'img-gallery4.jpg',
          quantity: 6
        },
        {
          id: 5,
          name: 'Sinh nhật AITS - 13 năm hành trình Chuyển đổi số',
          img: 'img-gallery5.jpg',
          quantity: 8
        },
        {
          id: 6,
          name: 'Đại hội đồng cổ đông thường niên 2021',
          img: 'img-gallery6.jpg',
          quantity: 18
        },
        {
          id: 7,
          name: 'Hội nghị đại biểu Người lao động 2021',
          img: 'img-gallery7.jpg',
          quantity: 7
        },
        {
          id: 8,
          name: 'CBNV AITS tiêm vaccine phòng chống COVID19',
          img: 'img-gallery8.jpg',
          quantity: 16
        },
        {
          id: 9,
          name: 'AITS hoàn thành thiết lập cơ sở hạ tầng CNTT - nhà M2 của TCT HKVN',
          img: 'img-gallery9.jpg',
          quantity: 5
        },
        {
          id: 10,
          name: 'Đánh giá ISO 27001/2013 và ISO 9001:2015',
          img: 'img-gallery10.jpg',
          quantity: 16
        },
        {
          id: 11,
          name: 'Người tốt việc tốt - Nguyễn Ngọc Bích',
          img: 'img-gallery11.jpg',
          quantity: 3
        },
        {
          id: 12,
          name: 'AITS hưởng ứng hoạt động Giọt hồng V - 2021',
          img: 'img-gallery12.jpg',
          quantity: 9
        }
      ],
      galleriesDb: []
    }
  },
  mutations: {
    refreshedData (state) {
      axios.get('http://localhost:9513/api/gallery').then((response) => {
        state.galleriesDb = response.data
      })
    }
  },
  getters: {
    galleryData (state) {
      return state.galleries
    },
    galleryDbData (state) {
      return state.galleriesDb
    }
  }
}

import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      customersDb: [
        {
          id: 1,
          compName: 'hamecos',
          img: 'logo-hameco.jpg'
        },
        {
          id: 2,
          compName: 'ncs',
          img: 'logo-ncs.jpg'
        },
        {
          id: 3,
          compName: 'sabre',
          img: 'logo-sabre.jpg'
        },
        {
          id: 4,
          compName: 'skypec',
          img: 'logo-skypec.jpg'
        },
        {
          id: 5,
          compName: 'tcs',
          img: 'logo-tcs.jpg'
        },
        {
          id: 6,
          compName: 'vaeco',
          img: 'logo-vaeco.jpg'
        },
        {
          id: 7,
          compName: 'vasco',
          img: 'logo-vasco.jpg'
        },
        {
          id: 8,
          compName: 'viags',
          img: 'logo-viags.jpg'
        },
        {
          id: 9,
          compName: 'vna',
          img: 'logo-vna.jpg'
        }

      ]
    }
  },
  mutations: {
    refreshedData (state) {
      axios.get('http://localhost:9513/api/Customers').then((response) => {
        state.customersDb = response.data
      })
    }
  },
  getters: {
    customerData (state) {
      return state.customersDb
    }
  }
}

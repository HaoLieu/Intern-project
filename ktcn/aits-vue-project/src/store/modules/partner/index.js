import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      partnersDb: [
        {
          id: 1,
          compName: 'Fortinet',
          img: 'logo-fortinet.jpg'
        },
        {
          id: 2,
          compName: 'Arinc',
          img: 'logo-arinc.jpg'
        },
        {
          id: 3,
          compName: 'Cisco',
          img: 'logo-cisco.jpg'
        },
        {
          id: 4,
          compName: 'Citrix',
          img: 'logo-citrix.jpg'
        },
        {
          id: 5,
          compName: 'Cyberpark',
          img: 'logo-cyberpark.jpg'
        },
        {
          id: 6,
          compName: 'Fujisu',
          img: 'logo-fujisu.jpg'
        },
        {
          id: 7,
          compName: 'Hitachi',
          img: 'logo-hitachi.jpg'
        },
        {
          id: 8,
          compName: 'Hp',
          img: 'logo-hp.jpg'
        },
        {
          id: 9,
          compName: 'Ibm',
          img: 'logo-ibm.jpg'
        },
        {
          id: 10,
          compName: 'Jeppesen',
          img: 'logo-jeppesen.jpg'
        },
        {
          id: 11,
          compName: 'Kale',
          img: 'logo-kale.jpg'
        },
        {
          id: 12,
          compName: 'Lhs',
          img: 'logo-lhs.jpg'
        },
        {
          id: 13,
          compName: 'Mcafe',
          img: 'logo-mcafe.jpg'
        },
        {
          id: 14,
          compName: 'Microsoft',
          img: 'logo-microsoft.jpg'
        },
        {
          id: 15,
          compName: 'Oracle',
          img: 'logo-oracle.jpg'
        },
        {
          id: 16,
          compName: 'Rolls Royce',
          img: 'logo-rolls-royce.jpg'
        },
        {
          id: 17,
          compName: 'Safran',
          img: 'logo-safran.jpg'
        },
        {
          id: 18,
          compName: 'Sap',
          img: 'logo-sap.jpg'
        },
        {
          id: 19,
          compName: 'Symantec',
          img: 'logo-symantec.jpg'
        }
      ]
    }
  },
  mutations: {
    refreshedData (state) {
      axios.get('http://localhost:9513/api/Partners').then((response) => {
        state.partnersDb = response.data
      })
    }
  },
  getters: {
    partnerData (state) {
      return state.partnersDb
    }
  }
}

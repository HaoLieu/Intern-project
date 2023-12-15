<template>
  <div id="app" class="container">
    <BackEndView></BackEndView>
    <div>
      <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
        @click="addClick()">
        Add Contact
      </button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            ContactId
          </th>
          <th>
            AdressInfo
          </th>
          <th>
            Email
          </th>
          <th>
            PhoneNum
          </th>
          <th>
            Options
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cnt, index) in contact" :key="index">
          <td>{{ cnt.ContactId }}</td>
          <td>{{ cnt.AddressInfo}}</td>
          <td>{{ cnt.Email }}</td>
          <td>{{ cnt.PhoneNum }}</td>

          <td>
            <button type="button" class="btn btn-primary" style="margin-right: 5px;" data-bs-toggle="modal"
              data-bs-target="#exampleModal" @click="editClick(cnt)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </button>
            <button type="button" class="btn btn-danger" @click="deleteClick(cnt.ContactId)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill"
                viewBox="0 0 16 16">
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Bang Popup -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="input-group mb-3">
              <span class="input-group-text">AdressInfo</span>
              <input type="text" class="form-control" v-model="AddressInfo">
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Email</span>
                <input type="text" class="form-control" v-model="Email">
            </div>

              <div class="input-group mb-3">
                <span class="input-group-text">PhoneNum</span>
                <input type="text" class="form-control" v-model="PhoneNum">
              </div>

            <button type="button" v-if="ContactId == 0" class="btn btn-primary" @click="createClick()">Create</button>
            <button type="button" v-if="ContactId != 0" class="btn btn-primary" @click="updateClick()">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BackEndView from '@/components/BackEndView.vue'

export default {
  components: {
    BackEndView
  },
  data () {
    return {
      contact: [],
      modalTitle: '',
      AddressInfo: '',
      ContactId: 0,
      PhoneNum: '',
      Email: ''
    }
  },
  methods: {
    refreshedData () {
      axios.get('http://localhost:9513/api/contact').then((response) => {
        this.contact = response.data
      })
    },
    addClick () {
      this.modalTitle = 'Add Contact'
      this.ContactId = 0
      this.AddressInfo = ''
      this.PhoneNum = ''
      this.Email = ''
    },
    createClick () {
      axios.post('http://localhost:9513/api/contact', {
        AddressInfo: this.AddressInfo,
        Email: this.Email,
        PhoneNum: this.PhoneNum
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    editClick (cnt) {
      this.modalTitle = 'Edit Contact'
      this.ContactId = cnt.ContactId
      this.AddressInfo = cnt.AddressInfo
      this.PhoneNum = cnt.PhoneNum
      this.Email = cnt.Email
    },
    updateClick () {
      axios.put('http://localhost:9513/api/contact', {
        ContactId: this.ContactId,
        AddressInfo: this.AddressInfo,
        Email: this.Email,
        PhoneNum: this.PhoneNum
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    deleteClick (id) {
      if (!confirm('Are you sure ?')) {
        return
      }

      axios.delete('http://localhost:9513/api/contact/' + id)
        .then((response) => {
          this.refreshedData()
          alert(response.data)
        })
    }
  },
  mounted: function () {
    this.refreshedData()
  }
}
</script>

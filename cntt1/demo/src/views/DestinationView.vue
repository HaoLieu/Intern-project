<template>
  <div id="app" class="container">
    <BackEndView></BackEndView>
    <div>
      <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
        @click="addClick()">
        Add Destination
      </button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            DestinationId
          </th>
          <th>
            Destination Name
          </th>
          <th>
            Destination Country
          </th>
          <th>
            Destination Pic
          </th>
          <th>
            Option
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dtn, index) in destinations" :key="index">
          <td>{{ dtn.DestinationId }}</td>
          <td>{{ dtn.DestinationName }}</td>
          <td>{{ dtn.DestinationCountry }}</td>
          <td>
            <img :src="`http://localhost:9513/photos/${dtn.DestinationPic}`" style="width: 150px; height: 100px;" />
          </td>
          <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
              style="margin-right: 5px;" @click="editClick(dtn)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </button>
            <button type="button" class="btn btn-danger" @click="deleteClick(dtn.DestinationId)">
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
            <div class="d-flex flex-row bd-highlight mb-3">
              <div class="p-2 w-50 bd-highlight">
                <div class="input-group mb-3">
                  <span class="input-group-text">Destination Name</span>
                  <input type="text" class="form-control" v-model="DestinationName">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text">Destination Country</span>
                  <input type="text" class="form-control" v-model="DestinationCountry">
                </div>
              </div>
              <div class="p-2 w-50 bd-highlight">
                <img v-if="DestinationId != 0" :src="`http://localhost:9513/photos/` + DestinationPic"
                  style="width: 200px; height: 200px;" />
                <input class="m-2" type="file" @change="imageUpload">
              </div>
            </div>

            <button type="button" v-if="DestinationId == 0" class="btn btn-primary" @click="createClick()">Create</button>
            <button type="button" v-if="DestinationId != 0" class="btn btn-primary" @click="updateClick()">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import variables from '../variables.json'
import BackEndView from '@/components/BackEndView.vue'

export default {
  components: {
    BackEndView
  },
  data () {
    return {
      destinations: [],
      variables,
      modalTitle: '',
      DestinationId: 0,
      DestinationName: '',
      DestinationCountry: '',
      DestinationPic: ''
    }
  },
  methods: {
    refreshedData () {
      axios.get('http://localhost:9513/api/destination').then((response) => {
        this.destinations = response.data
      })
    },
    addClick () {
      this.modalTitle = 'Add Destiantion'
      this.DestinationId = 0
      this.DestinationName = ''
      this.DestinationCountry = ''
      this.DestinationPic = ''
    },
    createClick () {
      axios.post('http://localhost:9513/api/destination', {
        DestinationName: this.DestinationName,
        DestinationCountry: this.DestinationCountry,
        DestinationPic: this.DestinationPic
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    editClick (dtn) {
      this.modalTitle = 'Edit Destination'
      this.DestinationId = dtn.DestinationId
      this.DestinationName = dtn.DestinationName
      this.DestinationCountry = dtn.DestinationCountry
      this.DestinationPic = dtn.DestinationPic
    },
    updateClick () {
      axios.put('http://localhost:9513/api/destination', {
        DestinationId: this.DestinationId,
        DestinationName: this.DestinationName,
        DestinationCountry: this.DestinationCountry,
        DestinationPic: this.DestinationPic
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    deleteClick (id) {
      if (!confirm('Are you sure ?')) {
        return
      }
      axios.delete('http://localhost:9513/api/destination/' + id)
        .then((response) => {
          this.refreshedData()
          alert(response.data)
        })
    },
    imageUpload (event) {
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      axios.post(
        'http://localhost:9513/api/destination/SaveFile', formData
      ).then((response) => {
        this.DestinationPic = response.data
      })
    }

    // printout () {
    //   const variables = this.variables
    //   console.log(variables[0].API_URL)
    // }
  },
  mounted: function () {
    this.refreshedData()
  }
}
</script>

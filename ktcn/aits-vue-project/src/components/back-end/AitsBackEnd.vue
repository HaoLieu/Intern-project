<template>

  <div id="app" class="container">
    <the-be-nav></the-be-nav>
    <div>
      <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
        @click="addClick()">
        Add aitsNews
      </button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            aitsId
          </th>
          <th>
            title
          </th>
          <th>
            description
          </th>
          <th>
            dateUpload
          </th>
          <th>
            img
          </th>
          <th>
            Option
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(aits, index) in aitsNews" :key="index">
          <td>{{ aits.aitsId }}</td>
          <td>{{ aits.title }}</td>
          <td>{{ aits.description }}</td>
          <td>{{ aits.dateUpload }}</td>
          <td>
            <img :src="`http://localhost:9513/photos/${aits.img}`" style="width: 150px; height: 100px;" />
          </td>
          <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
              style="margin-right: 5px;" @click="editClick(aits)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </button>
            <button type="button" class="btn btn-danger" @click="deleteClick(aits.aitsId)">
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
                  <span class="input-group-text">Title</span>
                  <textarea type="text" class="form-control" v-model="title"></textarea>
                </div>

                <div class="input-group mb-3"  style="height: 44.5%;">
                  <span class="input-group-text">Description</span>
                  <textarea type="text" class="form-control" v-model="description"></textarea>
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">dateUpload</span>
                    <input type="text" class="form-control" v-model="dateUpload">
                  </div>
              </div>

              <div class="p-2 w-50 bd-highlight">
                <img v-if="aitsId != 0" :src="`http://localhost:9513/photos/` + img"
                  style="width: 200px; height: 200px;" />
                <input class="m-2" type="file" @change="imageUpload">
              </div>
            </div>

            <button type="button" v-if="aitsId == 0" class="btn btn-primary" @click="createClick()">Create</button>
            <button type="button" v-if="aitsId != 0" class="btn btn-primary" @click="updateClick()">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      aitsNews: [],
      modalTitle: '',
      aitsId: 0,
      title: '',
      description: '',
      dateUpload: '',
      img: ''
    }
  },
  methods: {
    refreshedData () {
      axios.get('http://localhost:9513/api/aitsNews').then((response) => {
        this.aitsNews = response.data
      })
    },
    addClick () {
      this.modalTitle = 'Add Destiantion'
      this.aitsId = 0
      this.title = ''
      this.description = ''
      this.dateUpload = ''
      this.img = ''
    },
    createClick () {
      axios.post('http://localhost:9513/api/aitsNews', {
        title: this.title,
        description: this.description,
        img: this.img,
        dateUpload: this.dateUpload
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    editClick (aits) {
      this.modalTitle = 'Edit aitsNews'
      this.aitsId = aits.aitsId
      this.title = aits.title
      this.description = aits.description
      this.dateUpload = aits.dateUpload
      this.img = aits.img
    },
    updateClick () {
      axios.put('http://localhost:9513/api/aitsNews', {
        aitsId: this.aitsId,
        title: this.title,
        description: this.description,
        dateUpload: this.dateUpload,
        img: this.img
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    deleteClick (id) {
      if (!confirm('Are you sure ?')) {
        return
      }
      axios.delete('http://localhost:9513/api/aitsNews/' + id)
        .then((response) => {
          this.refreshedData()
          alert(response.data)
        })
    },
    imageUpload (event) {
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      axios.post(
        'http://localhost:9513/api/aitsNews/SaveFile', formData
      ).then((response) => {
        this.img = response.data
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

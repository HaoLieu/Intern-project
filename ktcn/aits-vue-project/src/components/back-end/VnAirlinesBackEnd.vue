<template>
  <div id="app" class="container">
    <the-be-nav></the-be-nav>
    <div>
      <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
        @click="addClick()">
        Add vnaNews
      </button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            vnaId
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
        <tr v-for="(vna, index) in vnaNews" :key="index">
          <td>{{ vna.vnaId }}</td>
          <td>{{ vna.title }}</td>
          <td>{{ vna.description }}</td>
          <td>{{ vna.dateUpload }}</td>
          <td>
            <img :src="`http://localhost:9513/photos/${vna.img}`" style="width: 150px; height: 100px;" />
          </td>
          <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
              style="margin-right: 5px;" @click="editClick(vna)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </button>
            <button type="button" class="btn btn-danger" @click="deleteClick(vna.vnaId)">
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

                <div class="input-group mb-3">
                  <span class="input-group-text">Origin</span>
                  <input type="text" class="form-control" v-model="origin">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text">Author</span>
                  <input type="text" class="form-control" v-model="author">
                </div>

                <div class="input-group mb-3"  style="height: 150px;">
                  <span class="input-group-text">Des</span>
                  <textarea type="text" class="form-control" v-model="description"></textarea>
                </div>

                <div class="input-group mb-3"  style="height: 150px;">
                  <span class="input-group-text">Rest</span>
                  <textarea type="text" class="form-control" v-model="rest"></textarea>
                </div>

              </div>

              <div class="p-2 w-50 bd-highlight">
                <img v-if="vnaId != 0" :src="`http://localhost:9513/photos/` + img"
                  style="width: 200px; height: 200px;" />
                <input class="m-2" type="file" @change="imageUpload">

                <div class="input-group mb-3">
                  <span class="input-group-text">Url</span>
                  <input type="text" class="form-control" v-model="url">
                </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text">Views</span>
                    <input type="text" class="form-control" v-model="views">
                  </div>

                <div class="input-group mb-3">
                  <span class="input-group-text">Note</span>
                  <input type="text" class="form-control" v-model="note">
                </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">DateUpload</span>
                    <input type="text" class="form-control" v-model="dateUpload">
                  </div>

                <div class="input-group mb-3">
                    <span class="input-group-text">DateTimeUpload</span>
                    <input type="text" class="form-control" v-model="dateTimeUpload">
                  </div>

              </div>
            </div>

            <button type="button" v-if="vnaId == 0" class="btn btn-primary" @click="createClick()">Create</button>
            <button type="button" v-if="vnaId != 0" class="btn btn-primary" @click="updateClick()">Update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '@/store/index.js'

export default {
  data () {
    return {
      vnaNews: [],
      modalTitle: '',
      vnaId: 0,
      title: '',
      origin: '',
      url: '',
      dateTimeUpload: '',
      views: '',
      author: '',
      note: '',
      rest: '',
      dateUpload: '',
      description: '',
      img: ''
    }
  },
  methods: {
    refreshedData () {
      axios.get('http://localhost:9513/api/vnAirlinesNews').then((response) => {
        this.vnaNews = response.data
      })
    },
    addClick () {
      this.modalTitle = 'Add VnaNews'
      this.vnaId = 0
      this.title = ''
      this.origin = ''
      this.url = 'VnAirlinesNewsDetail'
      this.dateTimeUpload = ''
      this.views = 0
      this.author = 'Super Admin'
      this.note = ''
      this.rest = ''
      this.description = ''
      this.dateUpload = ''
      this.img = ''
    },
    createClick () {
      axios.post('http://localhost:9513/api/vnAirlinesNews', {
        title: this.title,
        origin: this.origin,
        url: this.url,
        dateTimeUpload: this.dateTimeUpload,
        views: this.views,
        author: this.author,
        note: this.note,
        rest: this.rest,
        description: this.description,
        img: this.img,
        dateUpload: this.dateUpload
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    editClick (vna) {
      this.modalTitle = 'Edit vnaNews'
      this.vnaId = vna.vnaId
      this.title = vna.title
      this.origin = vna.origin
      this.url = vna.url
      this.dateTimeUpload = vna.dateTimeUpload
      this.views = vna.views
      this.author = vna.author
      this.note = vna.note
      this.rest = vna.rest
      this.description = vna.description
      this.dateUpload = vna.dateUpload
      this.img = vna.img
    },
    updateClick () {
      axios.put('http://localhost:9513/api/vnAirlinesNews', {
        vnaId: this.vnaId,
        title: this.title,
        origin: this.origin,
        url: this.url,
        dateTimeUpload: this.dateTimeUpload,
        views: this.views,
        author: this.author,
        note: this.note,
        rest: this.rest,
        description: this.description,
        img: this.img,
        dateUpload: this.dateUpload
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    deleteClick (id) {
      if (!confirm('Are you sure ?')) {
        return
      }
      axios.delete('http://localhost:9513/api/vnAirlinesNews/' + id)
        .then((response) => {
          this.refreshedData()
          alert(response.data)
        })
    },
    imageUpload (event) {
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      axios.post(
        'http://localhost:9513/api/vnAirlinesNews/SaveFile', formData
      ).then((response) => {
        this.img = response.data
      })
    }
  },
  mounted: function () {
    this.refreshedData()
  },
  beforeRouteEnter (to, from, next) {
    if (store.state.loginRouteGuard === false) {
      next(false)
    } else {
      next()
    }
  }
}
</script>

<template>
  <div id="app" class="container">
    <BackEndView></BackEndView>
    <div>
      <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
        @click="addClick()">
        Add Container
      </button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            ContainerId
          </th>
          <th>
            Container Title
          </th>
          <th>
            Container Properties
          </th>
          <th>
            Container Icon
          </th>
          <th>
            Option
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(ct, index) in container" :key="index">
          <td>{{ ct.ContainerId }}</td>
          <td>{{ ct.ContainerTitle }}</td>
          <td>{{ ct.ContainerProperties }}</td>
          <td>
            <img :src="`http://localhost:9513/photos/${ct.ContainerIcon}`" style="width: 100px;" />
          </td>
          <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
              style="margin-right: 5px;" @click="editClick(ct)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </button>
            <button type="button" class="btn btn-danger" @click="deleteClick(ct.ContainerId)">
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
                  <span class="input-group-text">Container Title</span>
                  <input type="text" class="form-control" v-model="ContainerTitle">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text">Container Properties</span>
                  <input type="text" class="form-control" v-model="ContainerProperties">
                </div>
              </div>
              <div class="p-2 w-50 bd-highlight">
                <img  v-if="ContainerId != 0" :src="`http://localhost:9513/photos/` + ContainerIcon"
                      style="width: 200px; height: 200px;"/>
                <input class="m-2" type="file" @change="imageUpload">
              </div>
            </div>

            <button type="button" v-if="ContainerId == 0" class="btn btn-primary" @click="createClick()">Create</button>
            <button type="button" v-if="ContainerId != 0" class="btn btn-primary" @click="updateClick()">Update</button>
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
      container: [],
      modalTitle: '',
      ContainerId: 0,
      ContainerTitle: '',
      ContainerProperties: '',
      ContainerIcon: ''
    }
  },
  methods: {
    refreshedData () {
      axios.get('http://localhost:9513/api/container').then((response) => {
        this.container = response.data
      })
    },
    addClick () {
      this.modalTitle = 'Add Container'
      this.ContainerId = 0
      this.ContainerTitle = ''
      this.ContainerProperties = ''
      this.ContainerIcon = ''
    },
    createClick () {
      axios.post('http://localhost:9513/api/container', {
        ContainerTitle: this.ContainerTitle,
        ContainerProperties: this.ContainerProperties,
        ContainerIcon: this.ContainerIcon
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    editClick (ct) {
      this.modalTitle = 'Edit Container'
      this.ContainerId = ct.ContainerId
      this.ContainerTitle = ct.ContainerTitle
      this.ContainerProperties = ct.ContainerProperties
      this.ContainerIcon = ct.ContainerIcon
    },
    updateClick () {
      axios.put('http://localhost:9513/api/container', {
        ContainerId: this.ContainerId,
        ContainerTitle: this.ContainerTitle,
        COntainerProperties: this.ContainerProperties,
        ContainerIcon: this.ContainerIcon
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    deleteClick (id) {
      if (!confirm('Are you sure ?')) {
        return
      }
      axios.delete('http://localhost:9513/api/container/' + id)
        .then((response) => {
          this.refreshedData()
          alert(response.data)
        })
    },
    imageUpload (event) {
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      axios.post(
        'http://localhost:9513/api/container/SaveFile', formData
      ).then((response) => {
        this.ContainerIcon = response.data
      })
    }
  },
  mounted: function () {
    this.refreshedData()
  }
}
</script>

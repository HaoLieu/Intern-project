<template>

  <div id="app" class="container">
    <the-be-nav></the-be-nav>
    <div>
      <button type="button" class="btn btn-primary m-2 fload-end" data-bs-toggle="modal" data-bs-target="#exampleModal"
        @click="addClick()">
        Add menu
      </button>
    </div>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>
            MenuId
          </th>
          <th>
            name
          </th>
          <th>
            link
          </th>
          <th>
            Options
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mn, index) in menu" :key="index">
          <td>{{ mn.id }}</td>
          <td>{{ mn.name }}</td>
          <td>{{ mn.link }}</td>

          <td>
            <button type="button" class="btn btn-primary" style="margin-right: 5px;" data-bs-toggle="modal"
              data-bs-target="#exampleModal" @click="editClick(mn)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
              </svg>
            </button>
            <button type="button" class="btn btn-danger" @click="deleteClick(mn.id)">
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
              <span class="input-group-text">Name</span>
              <input type="text" class="form-control" v-model="name">
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Link</span>
              <input type="text" class="form-control" v-model="link">
            </div>

            <button type="button" v-if="id == 0" class="btn btn-primary" @click="createClick()">Create</button>
            <button type="button" v-if="id != 0" class="btn btn-primary" @click="updateClick()">Update</button>
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
      menu: [],
      modalTitle: '',
      name: '',
      id: 0,
      link: ''
    }
  },
  methods: {
    refreshedData () {
      axios.get('http://localhost:9513/api/menu').then((response) => {
        this.menu = response.data
      })
    },
    addClick () {
      this.modalTitle = 'Add Menu'
      this.id = 0
      this.name = ''
      this.link = ''
    },
    createClick () {
      axios.post('http://localhost:9513/api/menu', {
        name: this.name,
        link: this.link
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    editClick (mn) {
      this.modalTitle = 'Edit menu'
      this.id = mn.id
      this.name = mn.name
      this.link = mn.link
    },
    updateClick () {
      axios.put('http://localhost:9513/api/menu', {
        id: this.id,
        name: this.name,
        link: this.link
      }).then((response) => {
        this.refreshedData()
        alert(response.data)
      })
    },
    deleteClick (id) {
      if (!confirm('Are you sure ?')) {
        return
      }

      axios.delete('http://localhost:9513/api/menu/' + id)
        .then((response) => {
          this.refreshedData()
          alert(response.data)
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

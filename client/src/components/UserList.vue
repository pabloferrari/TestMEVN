<template>
  <div class="uk-container">
    <h1>Listado de usuarios</h1>
    <div uk-grid>
      <table class="uk-table uk-table-justify">
        <thead>
          <tr>
            <td>id</td>
            <td>Username</td>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Email</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user._id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>
              <router-link :to="{ name: 'edit', params: { id: user._id }}"><span uk-icon="file-edit"></span></router-link> | <a v-on:click="deleteItem(user)"><span uk-icon="trash"></span></a>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
    
    
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
import { urlServer } from "../../environment";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios)

export default {
  name: 'UserList',
  computed: {
    ...mapState(['users'])
  },
  methods: {
    ...mapActions([
      'getUsersList',
    ]),
    deleteItem(user){
      if (!confirm(`¿Confirma eliminar el usuario: ${user.firstName} ${user.lastName}?`))
      return false;
      Vue.axios.delete(`${urlServer}/delUser`,{data:{id:user._id}})
      .then(res => {
        if(res)
        this.getUsersList()
      })
      .catch(err => console.log(err));
    }
  },
  created() {
    this.getUsersList()
  }

}
</script>

<style>

thead{font-weight: bold;}

</style>
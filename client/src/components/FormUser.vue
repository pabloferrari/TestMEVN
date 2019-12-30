<template>
  <div uk-grid>
    <form class="uk-form-horizontal uk-margin-large" @submit.prevent="saveUser()">
        <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Username</label>
            <div class="uk-form-controls">
                <input class="uk-input" type="text" name="username" id="username" v-model="username">
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Email</label>
            <div class="uk-form-controls">
                <input class="uk-input" type="email" name="email" id="email" v-model="email">
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Nombre</label>
            <div class="uk-form-controls">
                <input class="uk-input" type="text" name="firstName" id="firstName" v-model="firstName">
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-text">Apellido</label>
            <div class="uk-form-controls">
                <input class="uk-input" type="text" name="lastName" id="lastName" v-model="lastName">
            </div>
        </div>

        <div class="uk-margin">
            <div class="uk-form-controls">
                <button class="uk-button uk-button-primary" type="submit">{{ messageButton }}</button>
            </div>
        </div>

    </form>

    <span>{{ messageError }}</span>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from "axios";
import { urlServer } from "../../environment";

export default {
    name: 'FormUser',
    methods: {
        setUser(){
            if(this.$route.params.id){
                let user = this.users.filter(u => u._id == this.$route.params.id)[0];
                this.username = user.username;
                this.email = user.email;
                this.firstName = user.firstName;
                this.lastName = user.lastName;
                this.id = this.$route.params.id;
                this.messageButton = 'MODIFICAR';
            }
        },
        saveUser(){
            let dataUser = {username:this.username,email:this.email,firstName:this.firstName,lastName:this.lastName};
            if(this.$route.params.id){
                axios.put(`${urlServer}/updateUser/${this.$route.params.id}`,dataUser)
                .then(res => {
                    if(res.status == 200)
                    this.$router.push({ path: '/' });
                })
                .catch(err => {
                    try {
                        this.messageError = err.response.data.error.errmsg;
                    } catch (error) {
                        this.messageError = error;
                    }
                });
            }else{
                axios.post(`${urlServer}/addUser`,dataUser)
                .then(res => {
                    if(res.status == 200)
                    this.$router.push({ path: '/' });
                })
                .catch(err => {
                    try {
                        this.messageError = err.response.data.error.errmsg;
                    } catch (error) {
                        this.messageError = error;
                    }
                });
            }
        }
    },
    data() {
        return {
            id:null,
            username:null,
            email:null,
            firstName:null,
            lastName:null,
            messageError:null,
            messageButton:'CREAR'
        }
    },
    computed: {
        ...mapState(['users'])
    },
    created(){
        this.setUser();
    }

}
</script>
<template>
  <div class="home">
    <UserList></UserList>
  </div>
</template>

<script>
// @ is an alias to /src
import UserList from '@/components/UserList.vue'

export default {
  name: 'home',
  components: {
    UserList
  }
}
</script>

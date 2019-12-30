<template>
  <div class="home">
    <FormUser></FormUser>
  </div>
</template>

<script>
// @ is an alias to /src
import FormUser from '@/components/FormUser.vue'

export default {
  name: 'edit',
  components: {
    FormUser
  }
}
</script>

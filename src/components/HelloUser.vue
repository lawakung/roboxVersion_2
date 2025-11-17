<template>
  <div>
   
    <input v-model="name" placeholder="กรอกชื่อของคุณ" />
  </div>
  
</template>


<script>
export default {
  name: 'HelloUser.vue',
  data() {
    return {
      name: '',
    }
  }
}
</script>
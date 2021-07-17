<template>
    <navbar/>
    <div class="container">
    <Listproduk/>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Listproduk from '@/components/Listproduk.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Listproduk
  }
}
</script>

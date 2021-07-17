<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <div class="row">
        <h1>Name produk</h1>
      </div>
    <listproduk/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Listproduk from "@/components/Listproduk.vue";
export default {
  name: "Home",
  components: {
    Navbar,
    Listproduk
  },
};
</script>

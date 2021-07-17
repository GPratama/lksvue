<template>
    <Navbar />
    <table class="table bg-info">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Foto</th>
                <th scope="col">Nama</th>
                <th scope="col">Alamat</th>
                <th scope="col">Hapus</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <th><img src="/img/images.jpg" width="150" alt=""></th>
                <th></th>
                <th></th>
                <th class="btn btn-success">hapus</th>
            </tr>
            <tr>
                <th>2</th>
                <th><img src="/img/images.jpg" width="150" alt=""></th>
                <th></th>
                <th></th>
                <th class="btn btn-success">hapus</th>
            </tr>
        </tbody>
    </table>
    <div class="mt-2 mx-5" align="right" ><a class="btn btn-success" href="">Login</a></div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>
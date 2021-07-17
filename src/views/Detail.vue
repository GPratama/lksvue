<template>
  <Navbar />
  <div class="container py-5">
    <div class="row">
      <div class="card col-6">
        <img class="card-img-top" src="\img\images (1).jpg" alt="" />
      </div>
      <div class="col-lg-6" align="left">
        <h2>iPhone 12</h2>
        <div>
            <h3 class="mt-3 text-start">Harga : $100</h3>
        </div>
        <div class="row align-items-center">
            <div class="col-auto">
                <h3 class="mt-3 ">Alamat : </h3>
            </div>
            
            <div class="col">
                <input class="form-control" type="text">
            </div>
        </div>
        <div class="mt-5" align="right">
            <router-link class="btn btn-primary " to="/Keranjang">keranjang</router-link> 
        </div>
      </div>
    </div>
    <div class="card my-5 ">
      <h1 class="mt-3">Deskripsi</h1>
      <p class="py-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
        consectetur alias fuga excepturi dicta molestias harum amet iusto
        facilis natus enim mollitia est vitae, culpa voluptates? Doloremque
        recusandae sint quae accusamus non commodi eius dolorem numquam
        obcaecati aspernatur magnam quam expedita consectetur at laudantium,
        voluptate illum vel iste totam corrupti cum blanditiis ea aliquid id.
        Iste voluptas, illum suscipit voluptates unde rem accusantium quos sed
        hic molestiae quas dolorem maxime praesentium, consectetur architecto
        omnis maiores! Earum obcaecati deleniti veritatis quisquam fugiat
        corrupti facere quia velit asperiores optio magni sed fugit laboriosam,
        enim ad assumenda reiciendis sunt quos cupiditate consequuntur!
        Inventore id temporibus optio eaque aliquid! Numquam molestiae
        perferendis assumenda voluptates molestias, accusamus rem cum, quas
        nesciunt eum neque placeat repudiandae aliquid quasi dolore? Quod quos,
        distinctio corrupti animi ipsa dolore in, ut laborum sunt incidunt
        officia culpa consectetur commodi doloremque labore cumque quas pariatur
        saepe delectus possimus blanditiis omnis libero. Earum dolorem unde
        nobis laudantium qui blanditiis ipsam optio, mollitia suscipit fugit
        dolorum aperiam id saepe quisquam et animi, incidunt, maxime nemo illo
        recusandae? Doloremque sit mollitia modi ipsa impedit incidunt
        perspiciatis fugit unde. Totam, voluptatum unde adipisci ratione aut
        saepe natus eveniet ut dignissimos sed, quidem debitis corporis sunt.
      </p>
    </div>
  </div>
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

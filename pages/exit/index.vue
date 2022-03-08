<template>
  <section class="vw-w-10 vh-h-10 flex center">
      <div class="w-5 h-5 p-5-percent bg-white border-radius-7 boxshadow-md">
          <el-header height="">
              <!-- Header content -->
            <h1 class="w-10 font-2rem color-coal">
                Por favor realize o login novamente <i class="el-icon-star mx-2rem"></i>
            </h1>
          </el-header>
          <br>
          <el-button class="px-4rem p-2-percent" type="primary" size="default" @click="index"></el-button>
      </div>
  </section>
</template>/

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        index() {
            window.location.href = '/'
        }
    }
}
</script>

<style>

</style>
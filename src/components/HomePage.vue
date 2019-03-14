<template>
  <div class="home-container content">
    <div class="photo">
      <img src="../assets/image/photo.jpg"/>
    </div>
    <div class="text" v-if="show">
      <p class="first-line">你好</p>
      <div class="cut-line"></div>
      <p>我叫李梦</p>
      <p>目前是一名等待毕业以及工作的大四学生</p>
      <p>正在努力成为前端开发工程师的路上</p>
      <p>464465548@qq.com</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePage",
    data() {
      return {
        show: true
      }
    }
  }
</script>

<style scoped>

  .home-container {
  }

  .photo {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 0.2rem solid rgba(255, 255, 255, 0.8);
    margin: 4rem auto 2rem;
  }

  .photo img {
    width: 100%;
    border-radius: 50%;
  }

  .text {
    line-height: 3rem;
  }

  .text .first-line {
    font-size: 1.5rem;
  }

  .cut-line {
    width: 65%;
    height: 1px;
    background-color: #411f1f;
    margin: 0.2rem auto 1.5rem;
  }
</style>

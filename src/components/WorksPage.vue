<template>
  <div class="works-container content">
    <div class="header">
      <p>我的作品</p>
    </div>
    <div class="works works1">
      <img class="works-img" src="../assets/image/tb_1.png"/>
      <p><a href="javascript:">仿淘宝APP</a></p>
    </div>
    <div class="works works2">
      <img class="works-img" src="../assets/image/wb_1.png"/>
      <p><a href="javascript:">仿淘宝客户端</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WorksPage"
  }
</script>

<style scoped>
  @import "../assets/css/css.css";

  .works {
    display: inline-block;
    /*background-color: yellowgreen;*/
  }

  .works img {
    box-shadow: 0.1rem 0 1rem 0.1rem darkgray;
  }

  .works p {
    line-height: 3rem;
  }

  .works a {
    color: #502727;
    display: inline-block;
  }

  .works a:hover {
    color: darkred;
    /*text-decoration: underline;*/
  }

  .works1 {
    height: 60%;
    margin-right: 0.6rem;
  }

  .works2 {
    height: 50%;
    margin-left: 0.6rem;
  }

  .works-img {
    height: 100%;
  }
</style>

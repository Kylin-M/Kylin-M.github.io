<template>
  <div class="experience-container content">
    <div class="header">
      <p>我的经历</p>
    </div>
    <div class="show-time">
      <div class="draw-dot"><img class="draw-dot-img" src="../assets/image/sakura_02.png"/></div>
      <span>2015.09&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
      <div class="detail-info"><span class="detail-title">江苏大学/本科/软件工程</span><br/>
        <small class="small-text">学习内容包括JAVA/Android/C#/C++/XML/...</small>
        <br/>
        <small class="small-text">以及数据结构/算法/数据库/编译原理/操作系统/设计模式/计算机网络等多门专业相关课程</small>
      </div>
    </div>
    <div class="draw-line"></div>
    <div class="show-time">
      <div class="draw-dot"><img class="draw-dot-img" src="../assets/image/sakura_02.png"/></div>
      <span>2018.11&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
      <div class="detail-info"><span class="detail-title">赞同科技股份有限公司/前端实习生</span><br/>
        <small class="small-text">实习期间参与了江南农村商业银行远程VTM和大客服项目开发</small>
        <br/>
        <small class="small-text">主要使用Vue+node.js+webpack等技术进行客户端的前台开发与维护</small>
      </div>
    </div>
    <div class="draw-line"></div>
    <div class="show-time">
      <div class="draw-dot"><img class="draw-dot-img" src="../assets/image/sakura_02.png"/></div>
      <span>2019.02&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
      <div class="detail-info"><span class="detail-title">实习生涯暂告一段落</span><br/>
        <small class="small-text">等待下一段旅程开启...</small>
      </div>
    </div>
    <div class="draw-line small-line"></div>
    <div class="draw-line small-line"></div>
    <div class="draw-line small-line"></div>
    <div class="show-time">
      <div class="draw-dot"><img class="draw-dot-img" src="../assets/image/sakura_02.png"/></div>
      <span>2019.07&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span>
      <div class="detail-info"><span class="detail-title">毕业</span><br/>
      </div>
    </div>
    <div class="draw-line small-line"></div>
    <div class="draw-line small-line"></div>
    <div class="draw-line small-line"></div>
    <div class="show-time">
      <div class="draw-dot"></div>
      <span>...</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ExperiencePage"
  }
</script>

<style scoped>
  @import "../assets/css/css.css";

  .experience-container {
  }

  .draw-line {
    height: 5rem;
    width: 0.2rem;
    margin-left: 15%;
    background-color: #ff777a;
  }

  .show-time {
    margin-left: calc(15% - 0.15rem);
    text-align: left;
    line-height: 2rem;
  }

  .draw-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    display: inline-block;
    margin-right: 1rem;
    transform: translateY(-50%);
    /*background-color: #cc2d2d;*/
    position: relative;
  }

  .draw-dot-img {
    width: 0.9rem;
    position: absolute;
    top: -0.2rem;
    left: -0.2rem;
  }

  .small-line {
    height: 0.3rem;
    margin-top: 0.3rem;
  }

  .small-text {
    font-size: 0.7rem;
    font-weight: 400;
  }

  .detail-info {
    /*background-color: lightcoral;*/
    display: inline-block;
    width: 60%;
    float: right;
    margin-right: 15%;
    line-height: normal;
  }

  .detail-title {
    line-height: 2rem;
  }
</style>

<template>
  <div class="info-container content" @mouseenter="changeRotateFlag(true)" @mouseleave="changeRotateFlag(false)">
    <div class="header">
      <p>关于我</p>
    </div>
    <ul class="clear-fix">
      <li>
        <img class="flower-icon" :class="{'rotate-animation':rotateFlag===true}" src="../assets/image/sakura_11.png"/>
        <p>年龄</p>
        <p class="f-text">21</p>
        <p>1998/2</p>
      </li>
      <li>
        <img class="flower-icon" :class="{'rotate-animation':rotateFlag===true}" src="../assets/image/sakura_11.png"/>
        <p>来自</p>
        <p class="f-text">云南</p>
        <p>文山州</p>
      </li>
      <li>
        <img class="flower-icon" :class="{'rotate-animation':rotateFlag===true}" src="../assets/image/sakura_11.png"/>
        <p>现居</p>
        <p class="f-text">江苏</p>
        <p>镇江市</p>
      </li>
      <li>
        <img class="flower-icon" :class="{'rotate-animation':rotateFlag===true}" src="../assets/image/sakura_11.png"/>
        <p>状态</p>
        <p class="f-text">持续单身</p>
        <p>只想工作</p>
      </li>
    </ul>
    <div class="more-info">
      <p>学习时很专心，有较强的自学能力</p>
      <p>工作时能自觉屏蔽外界干扰，善于交流沟通</p>
      <p>闲暇时喜欢看书、写小说、画画、听歌，适当玩玩各种类型的游戏</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoPage",
    data() {
      return {
        rotateFlag: 0,
      }
    },
    methods: {
      changeRotateFlag(num) {
        this.rotateFlag = num;
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/css.css";

  .info-container {
  }

  ul {
    width: 80%;
    margin: 0 auto;
  }

  ul li {
    width: 25%;
    float: left;
  }

  li p {
    line-height: 3rem;
  }

  .f-text {
    margin-top: 1.5rem;
  }

  .flower-icon {
    width: 35%;
    padding: 0.5rem;
    border-radius: 30%;
    border: 1px solid rgba(255, 255, 255, 0.8);
    transition: border 3s, transform 6s;
  }

  .rotate-animation {
    transform: rotate(270deg);
    border: 0.1rem solid transparent;
  }

  .more-info {
    margin-top: 2rem;
  }

  .more-info p {
    line-height: 2.4rem;
  }
</style>

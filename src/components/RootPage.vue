<template>
  <div class="all-container">
    <div class="container" :class="choice===1?'selected':'unselected'" @click="changeContent(1)"
         @mouseover="showTip(1)" @mouseout="showTip(0)">
      <footer-page v-if="choice===1"></footer-page>
      <img class="container-bg" src="../assets/image/container_bg_01.png"/>
      <div class="title-card" :class="choice===1?'fade-out':'fade-in'">
        <img class="title-icon" src="../assets/image/footer_icon.png"/>
        <span class="title-text" :class="{'show-tip':showTipFlag===1}">结束</span>
      </div>
    </div>
    <div class="container" :class="choice===2?'selected':'unselected'" @click="changeContent(2)"
         @mouseover="showTip(2)" @mouseout="showTip(0)">
      <works-page></works-page>
      <img class="container-bg" src="../assets/image/container_bg_02.png"/>
      <div class="title-card" :class="choice===2?'fade-out':'fade-in'">
        <img class="title-icon" src="../assets/image/works_icon.png"/>
        <span class="title-text" :class="{'show-tip':showTipFlag===2}">作品</span>
      </div>
    </div>
    <div class="container" :class="choice===3?'selected':'unselected'" @click="changeContent(3)"
         @mouseover="showTip(3)" @mouseout="showTip(0)">
      <experience-page></experience-page>
      <img class="container-bg" src="../assets/image/container_bg_03.png"/>
      <div class="title-card" :class="choice===3?'fade-out':'fade-in'">
        <img class="title-icon" src="../assets/image/experience_icon.png"/>
        <span class="title-text" :class="{'show-tip':showTipFlag===3}">经历</span>
      </div>
    </div>
    <div class="container" :class="choice===4?'selected':'unselected'" @click="changeContent(4)"
         @mouseover="showTip(4)" @mouseout="showTip(0)">
      <skill-page></skill-page>
      <img class="container-bg" src="../assets/image/container_bg_04.png"/>
      <div class="title-card" :class="choice===4?'fade-out':'fade-in'">
        <img class="title-icon" src="../assets/image/skill_icon.png"/>
        <span class="title-text" :class="{'show-tip':showTipFlag===4}">技能</span>
      </div>
    </div>
    <div class="container" :class="choice===5?'selected':'unselected'" @click="changeContent(5)"
         @mouseover="showTip(5)" @mouseout="showTip(0)">
      <info-page v-if="choice===5"></info-page>
      <img class="container-bg" src="../assets/image/container_bg_05.png"/>
      <div class="title-card" :class="choice===5?'fade-out':'fade-in'">
        <img class="title-icon" src="../assets/image/info_icon.png"/>
        <span class="title-text" :class="{'show-tip':showTipFlag===5}">关于我</span>
      </div>
    </div>
    <div class="container" :class="choice===6?'selected':'unselected'" @click="changeContent(6)"
         @mouseover="showTip(6)" @mouseout="showTip(0)">
      <home-page v-if="choice===6"></home-page>
      <img class="container-bg" src="../assets/image/container_bg_06.png"/>
      <div class="title-card" :class="choice===6?'fade-out':'fade-in'">
        <img class="title-icon" src="../assets/image/home_icon.png"/>
        <span class="title-text" :class="{'show-tip':showTipFlag===6}">首页</span>
      </div>
    </div>
  </div>
</template>

<script>
  import HomePage from "@/components/HomePage";
  import InfoPage from "@/components/InfoPage";
  import SkillPage from "@/components/SkillPage";
  import ExperiencePage from "@/components/ExperiencePage";
  import WorksPage from "@/components/WorksPage";
  import FooterPage from "@/components/FooterPage";

  export default {
    name: 'RootPage',
    components: {FooterPage, WorksPage, ExperiencePage, SkillPage, InfoPage, HomePage},
    data() {
      return {
        choice: 6,
        showTipFlag: 0,
      }
    },
    watch: {},
    methods: {
      changeContent(num) {
        this.choice = num;
      },
      showTip(num) {
        this.showTipFlag = num;
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/css.css";

  .all-container {
    height: 100%;
    background-color: whitesmoke;
    overflow: hidden;
  }

  .all-container .container {
    float: left;
    width: 6%;
    height: 0;
    overflow: hidden;
    padding-top: 54%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    /*background-color: rgba(240, 214, 228, 0.5);*/
    background-color: rgba(255, 255, 255, 0.75);
    box-shadow: 0.2rem 0 1rem 0.1rem darkgray;
    transition: width 1.5s ease 1s;
  }

  .all-container .container:hover {
    box-shadow: 0.2rem 0 1rem 0.1rem lightcoral;
    z-index: 1;
  }

  .all-container .selected {
    width: 70%;
  }

  .all-container .unselected {
    width: 6%;
    transition: width 1s ease 0s;
  }

  .container-bg {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }

  .all-container .title-card {
    background-color: rgba(255, 128, 128, 0.6);
    width: calc(100% - 0.15rem);
    border-right: 0.1rem solid transparent;
    height: 25%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 1s ease 0s;
  }

  .fade-out {
    opacity: 0;
  }

  .fade-in {
    opacity: 1;
  }

  .title-icon {
    height: 25%;
    position: absolute;
    top: 30%;
    right: 50%;
    transform: translate(50%, -50%);
  }

  .title-text {
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    width: 100%;
    position: absolute;
    top: 75%;
    right: 50%;
    transform: translate(50%, -50%);
    opacity: 0;
    transition: opacity 1s ease 0s, top 1s ease 0s;
  }

  .show-tip {
    opacity: 1;
    top: 65%;
  }
</style>

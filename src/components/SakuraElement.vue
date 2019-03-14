<template>
  <div style="position: absolute" :style="{top:locationX,left:locationY,float:lineDirection}">
    <img class="sakura-icon" v-if="level===0" src="../assets/image/skill_lv0.png"/>
    <img class="sakura-icon" v-if="level===1" src="../assets/image/skill_lv1.png"/>
    <img class="sakura-icon" v-if="level===2" src="../assets/image/skill_lv2.png"/>
    <img class="sakura-icon" v-if="level===3" src="../assets/image/skill_lv3.png"/>
    <img class="sakura-icon" v-if="level===4" src="../assets/image/skill_lv4.png"/>
    <img class="sakura-icon" v-if="level===5" src="../assets/image/skill_lv5.png"/>
    <span class="skill-text" :style="{float:lineDirection}">{{text}}</span>
    <span class="draw-line" :style="{width:lineWidth,float:lineDirection}"></span>
  </div>
</template>

<script>
  export default {
    name: "SakuraElement",
    props: {
      lineWidth: {type: String, default: "0"},
      text: {type: String, default: ""},
      locationX: {type: String, default: "0"},
      locationY: {type: String, default: "0"},
      lineDirection: {type: String, default: "right"},
      level: {type: Number, default: 0}
    }
  }
</script>

<style scoped>
  .sakura-icon {
    width: 1.5rem;
  }

  .draw-line {
    display: inline-block;
    width: 4rem;
    height: 1px;
    margin: 0.7rem 0.2rem 0;
    background-color: darkred;
  }

  .skill-text {
    display: inline-block;
    position: relative;
    top: 0.2rem;
    color: darkred;
    font-size: 0.9rem;
  }
</style>

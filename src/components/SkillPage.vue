<template>
  <div class="skill-container content">
    <div class="header">
      <p>技能树</p>
    </div>
    <div class="skill-tree">
      <img class="tree-img" src="../assets/image/tree_img.png"/>
      <div class="skill-content">
        <sakura-element :level=5 :lineWidth="'3rem'" :text="'HTML'" :locationX="'5%'"
                        :locationY="'65%'"></sakura-element>
        <sakura-element :level=4 :lineWidth="'2rem'" :text="'CSS'" :locationX="'15%'"
                        :locationY="'62%'"></sakura-element>
        <sakura-element :level=3 :lineWidth="'1rem'" :text="'JS'" :locationX="'25%'"
                        :locationY="'55%'"></sakura-element>
        <sakura-element :level=2 :lineWidth="'3rem'" :text="'JQuery'" :locationX="'10%'" :locationY="'18%'"
                        :lineDirection="'left'"></sakura-element>
        <sakura-element :level=3 :lineWidth="'3rem'" :text="'Vue'" :locationX="'20%'" :locationY="'10%'"
                        :lineDirection="'left'"></sakura-element>
        <sakura-element :level=3 :lineWidth="'3rem'" :text="'ES6'" :locationX="'30%'" :locationY="'18%'"
                        :lineDirection="'left'"></sakura-element>
        <sakura-element :level=3 :lineWidth="'2rem'" :text="'PS'" :locationX="'36%'" :locationY="'-2%'"
                        :lineDirection="'left'"></sakura-element>
        <sakura-element :level=2 :lineWidth="'7rem'" :text="'JAVA'" :locationX="'45%'" :locationY="'-12%'"
                        :lineDirection="'left'"></sakura-element>
        <sakura-element :level=3 :lineWidth="'2rem'" :text="'Android'" :locationX="'40%'"
                        :locationY="'60%'"></sakura-element>
        <sakura-element :level=3 :lineWidth="'4rem'" :text="'Python'" :locationX="'58%'"
                        :locationY="'56%'"></sakura-element>
      </div>
      <div class="level-introduce">
        <p>掌握程度</p>
        <sakura-element class="lv-sakura" :level=5 :text="'100%'" :locationX="'150%'" :locationY="'0'"></sakura-element>
        <sakura-element class="lv-sakura" :level=4 :text="'80%'" :locationX="'270%'" :locationY="'0'"></sakura-element>
        <sakura-element class="lv-sakura" :level=3 :text="'60%'" :locationX="'390%'" :locationY="'0'"></sakura-element>
        <sakura-element class="lv-sakura" :level=2 :text="'40%'" :locationX="'510%'" :locationY="'0'"></sakura-element>
        <sakura-element class="lv-sakura" :level=1 :text="'20%'" :locationX="'630%'" :locationY="'0'"></sakura-element>
        <sakura-element class="lv-sakura" :level=0 :text="'0%'" :locationX="'750%'" :locationY="'0'"></sakura-element>
      </div>
    </div>
  </div>
</template>

<script>
  import SakuraElement from "@/components/SakuraElement";

  export default {
    name: "SkillPage",
    components: {SakuraElement}
  }
</script>

<style scoped>
  @import "../assets/css/css.css";

  .skill-container {
  }

  .skill-tree {
    position: relative;
  }

  .tree-img {
    width: 55%;
    position: relative;
    left: 10%;
  }

  .skill-content {
    width: 55%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 60%;
    transform: translateX(-50%);
    /*background-color: rgba(0, 0, 255, 0.2);*/
  }

  .level-introduce {
    /*background-color: yellow;*/
    position: absolute;
    top: 5%;
    left: 10%;
  }
</style>

<template>
  <div class="footer-container content">
    <div class="thanks">
      <p>感谢您愿意抽空看完我的简历</p>
      <p>期待有机会与您共事</p>
    </div>
    <div class="cut-line"></div>
    <div class="contact-way">
      <p>我的联系方式：</p>
      <ul class="contact-way-list clear-fix">
        <li><img class="contact-way-img" src="../assets/image/qq_icon.png"/>
          <p>QQ</p></li>
        <li><img class="contact-way-img" src="../assets/image/wx_icon.png"/>
          <p>微信</p></li>
        <li><img class="contact-way-img" src="../assets/image/phone_icon.png"/>
          <p>电话</p></li>
        <li><img class="contact-way-img" src="../assets/image/email_icon.png"/>
          <p>邮箱</p></li>
        <li><p class="contact-way-text">464465548</p></li>
        <li><p class="contact-way-text">forme19</p></li>
        <li><p class="contact-way-text">18860873081</p></li>
        <li><p class="contact-way-text">464465548@qq.com</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FooterPage"
  }
</script>

<style scoped>
  @import "../assets/css/css.css";

  .footer-container {
    line-height: 3rem;
  }

  .thanks {
    margin: 5rem auto 3rem;
  }

  .contact-way {
    /*padding-top: 1rem;*/
  }

  .contact-way-list {
    width: 90%;
    margin: 1rem auto;
  }

  .contact-way-list li {
    float: left;
    width: 25%;
    line-height: normal;
  }

  .contact-way-img {
    width: 15%;
    margin-top: 1.5rem;
  }

  .contact-way-text {
    line-height: 5rem;
  }

  .cut-line {
    width: 65%;
    height: 1px;
    background-color: #411f1f;
    margin: 0.2rem auto 1.5rem;
  }
</style>

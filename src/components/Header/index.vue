<template>
  <div class="header">
    <div class="content-width">
      <div class="slogn">
        <img src="https://rs.dance365.com/logo@3xrenew3.png" alt="" />
      </div>
      <div class="nav">
        <RouterLink to="/index/recommend">
          <span class="item">资源</span>
        </RouterLink>
        <RouterLink to="/discover">
          <span class="item">课程</span>
        </RouterLink>
        <RouterLink to="/training">
          <span class="item">练习室</span>
        </RouterLink>
        <RouterLink to="/communication/systemnote">
          <span class="item">交流</span>
        </RouterLink>
        <RouterLink to="/center/dynamics">
          <span class="item">我的</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  height: 60px;
  border: 1px red solid;
  /* justify-content: center; */
  align-items: center;
  display: flex;
  position: relative;
}
.nav {
  display: inline-flex;
  float:left
}

.slogn {
  display: flex;
  height: 60px;
  margin-right: 30px;
  padding-top: 4px;
  align-items: center;
}
.content-width{
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
}
img {
  width: 128px;
  height: 30px;
}
span {
  font-size: larger;
  color: black;
  padding: 12px 10px;
  font-family: PingFang SC, Lantinghei SC, Microsoft YaHei, HanHei SC,
    Helvetica Neue, Open Sans, Arial, Hiragino Sans GB, "\5FAE\8F6F\96C5\9ED1",
    STHeiti, WenQuanYi Micro Hei, SimSun, sans-serif;
}
a {
  text-decoration: none;
}
</style>
<style>
.nav .item {
    margin-left: 40px;
}
</style>